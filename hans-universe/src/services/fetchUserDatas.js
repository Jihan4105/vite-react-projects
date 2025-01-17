import userDatas from "../data/userDatas";

export function getUser(email) {
  const corrrectUser = userDatas.filter((userData) => userData.email === email)

  return corrrectUser[0]
}

export function getUserById(userId) {
  const corrrectUser = userDatas.filter((userData) => userData.id == userId)

  return corrrectUser[0]
}