import axios from "@api/api"

import useAuth from "@hooks/useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await axios.get("/refresh/getNewAccessToken", {
      withCredentials: true
    })
    setAuth(prev => {
      console.log(JSON.stringify(prev))
      console.log(response.data.accesToken)
      return { ...prev, accessToken: response.data.accesToken}
    })
  }

  return refresh
}

export default useRefreshToken