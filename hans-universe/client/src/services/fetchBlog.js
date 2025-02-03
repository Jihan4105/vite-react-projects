const hostname = import.meta.env.VITE_SERVER_HOSTNAME
const port = import.meta.env.VITE_SERVER_PORT

export async function getBlogDatas (blogType) {
  const response = await fetch(`http://${hostname}:${port}/blog/getBlogDatas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",             
    },
    body: JSON.stringify({
      blogType: blogType
    })
  })
  const data = await response.json()

  return data
}

export async function getBlogItem (blogType, blogId) {
  const response = await fetch(`http://${hostname}:${port}/blog/getBlogItem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      blogType: blogType,
      blogId: blogId
    })
  })
  const data = await response.json()

  return data
}