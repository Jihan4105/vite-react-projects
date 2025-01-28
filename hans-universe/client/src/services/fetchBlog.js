export async function getBlogDatas (blogType) {
  const hostname = import.meta.env.VITE_SERVER_HOSTNAME
  const port = import.meta.env.VITE_SERVER_PORT

  const response = await fetch(`http://${hostname}:${port}/getBlogDatas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      blogType: blogType
    })
  })
  const data = await response.json()

  return data.blogDatas
}

export async function getBlogItem (blogType, blogIndex) {
  const hostname = import.meta.env.VITE_SERVER_HOSTNAME
  const port = import.meta.env.VITE_SERVER_PORT

  const response = await fetch(`http://${hostname}:${port}/getBlogItem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      blogType: blogType,
      blogIndex: blogIndex
    })
  })

  const data = await response.json()

  return data.blogItem
}