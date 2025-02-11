import axios from "@api/api"
import { useContext } from "react";

import AuthContext from "@contexts/AuthContext";

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthContext)

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      //쿠키를 request와 같이 보낼 수 있게 해주는 옵션
      withCredentials: true
    })
    setAuth(prev => {
      console.log(JSON.stringify(prev))
      console.log(response.data.accesToken)
      return { ...prev, accessToken: response.data.accesToken}
    })
    return refresh
  }
}

export default useRefreshToken