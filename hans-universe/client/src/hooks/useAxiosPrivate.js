import { axiosPrivate } from "@api/api";
import { useEffect, useContext } from "react";

import AuthContext from "@contexts/AuthContext";

import useRefreshToken from "./useRefreshToken";



const useAxiosPrivate = () => {
  const refresh = useRefreshToken()
  const { auth } = useContext(AuthContext)

  useEffect(() => {

    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        if(!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accesToken}`
        }
        return config
      }, 
      (error) => Promise.reject(error)
    )

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
      axiosPrivate.interceptors.response.eject(responseIntercept)
      axiosPrivate.interceptors.request.eject(requestIntercept)
    }
  },[auth, refresh])

  return axiosPrivate
}

export default useAxiosPrivate
