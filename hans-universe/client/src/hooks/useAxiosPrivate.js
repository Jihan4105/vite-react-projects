import { axiosPrivate } from "@api/api";
import { useEffect } from "react";

import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  // refresh함수는 쿠키에 저장된 refreshtoken으로 새로운 accessToken을 set하는 함수다다
  const refresh = useRefreshToken()
  const { auth } = useAuth()

  useEffect(() => {

    //request를 보내기전 interceptor를 추가하여 header에 새로생성된 accessToken을 넣는다다
    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        if(!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`
        }
        return config
      }, 
      (error) => Promise.reject(error)
    )

    // response를 받기전, interceptor에서 만약 요청이 성공해서 response가 왔다면 그대로 통과,
    // 요청이 실패했다면 prevRequest를 axios의 error.config API로 받아서
    // 만약 그 요청이 403에러(token expired로 인해)를 받았고, 처음 한한 요청이 라면
    // if문안에서 새로운 accessToken을 받아서 전 요청에다가 Authorization헤더에 새로운 accessToken을
    // 넣어서 다시 요청하게 함.
    // prevRequest의 sent는 custom property로 같은 요청을 다시하고 또다시하는 걸 방지해준다.
    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response,
      async (error) => {
        const prevRequest = error?.config
        if(error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true
          const newAccessToken = await refresh()
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          return axiosPrivate(prevRequest)
        } 
        return Promise.reject(error)
      }
    )

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept)
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  },[auth, refresh])

  return axiosPrivate
}

export default useAxiosPrivate