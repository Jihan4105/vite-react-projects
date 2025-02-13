import axios from "@api/api"

import useAuth from "@hooks/useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await axios.get("/refresh/getNewAccessToken", {
      withCredentials: true
    })
    setAuth(prev => {
      return { ...prev, accessToken: response.data.accessToken}
    })
    return response.data.accessToken
  }

  return refresh
}

export default useRefreshToken