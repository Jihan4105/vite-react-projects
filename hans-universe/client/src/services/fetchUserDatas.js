import userDatas from "../data/userDatas";

export async function getUserByFilter(filterType, filterValue) {
  const hostname = import.meta.env.VITE_SERVER_HOSTNAME
  const port = import.meta.env.VITE_SERVER_PORT

  const response = await fetch(`http://${hostname}:${port}/user/getUserByFilter`, {
    method: "POST",
    headers:  {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filterType: filterType,
      filterValue: filterValue
    })
  })
  const data = await response.json()
  return data
}