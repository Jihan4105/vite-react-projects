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

export async function editComment( type, blogType, blogItem, commentText, commentId, commentIndex, newDate) {
  const res = await fetch(`http://${hostname}:${port}/comment/edit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      type: type,
      blogType: blogType,
      blogItem: blogItem,
      commentText: commentText,
      commentId: commentId,
      commentIndex: commentIndex,
      newDate: newDate
    })
  })
  const data = await res.json()

  return data
}