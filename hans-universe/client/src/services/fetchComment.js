const hostname = import.meta.env.VITE_SERVER_HOSTNAME
const port = import.meta.env.VITE_SERVER_PORT

export async function createComment( blogType, blogItem, newComment, commentIndex) {
  const res = await fetch(`http://${hostname}:${port}/comment/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      blogType: blogType,
      blogItem: blogItem,
      newComment: newComment,
      commentIndex: commentIndex
    })
  }) 
  const data = await res.json()
  
  return data
}