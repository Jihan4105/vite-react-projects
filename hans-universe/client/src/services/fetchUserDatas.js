import userDatas from "../data/userDatas";

export function getUser(email) {
  const corrrectUser = userDatas.filter((userData) => userData.email === email)

  return corrrectUser[0]
}

export async function getUserById(userId) {
  const hostname = import.meta.env.VITE_SERVER_HOSTNAME
  const port = import.meta.env.VITE_SERVER_PORT

  await fetch(`http://${hostname}:${port}/getUserById`, {
    method: "POST",
    headers:  {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId
    })
  })
    .then((res) => res.json())
    .then((data) => {
      return data.userData
    })
}