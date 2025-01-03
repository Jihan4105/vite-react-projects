import userDatas from "../data/usersData";

export function getUser(email) {
  const corrrectUser = userDatas.filter((userData) => userData.email === email)

  return corrrectUser[0]
}