import axios from "axios"

const hostname = import.meta.env.VITE_SERVER_HOSTNAME
const port = import.meta.env.VITE_SERVER_PORT

export default axios.create({
  baseURL: `http://${hostname}:${port}`
})

export const axiosPrivate = axios.create({
  baseURL: `http://${hostname}:${port}`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true
})