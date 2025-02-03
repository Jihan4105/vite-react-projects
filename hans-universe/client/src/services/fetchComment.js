const hostname = import.meta.env.VITE_SERVER_HOSTNAME
const port = import.meta.env.VITE_SERVER_PORT

export async function createComment(type, user, commentText, index) {
  const res = await fetch(`http://${hostname}:${port}/comment/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      
    })
  }) 
}