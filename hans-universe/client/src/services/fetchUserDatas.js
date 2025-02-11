import useAxiosPrivate from "@/hooks/useAxiosPrivate"

const axiosPrivate = useAxiosPrivate()

export async function getUserByFilter(filterType, filterValue) {
  const res = await axiosPrivate.post(`/user/getUserByFilter`, {
    filterType: filterType,
    filterValue: filterValue
  })
  const data = res.data
  return data
}