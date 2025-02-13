const hostname = import.meta.env.VITE_SERVER_HOSTNAME
const port = import.meta.env.VITE_SERVER_PORT

export async function createComment( axiosPrivate, blogType, blogItem, newComment, commentIndex) {
  const controller = new AbortController()

  try {
    const res = await axiosPrivate.post(`/comment/create`, {
      blogType: blogType,
      blogItem: blogItem,
      newComment: newComment,
      commentIndex: commentIndex,
      signal: controller.signal
    })
    controller.abort()
    return res.data
  } catch(error) {
    console.log(error.message)
    return error.message
  }
}

export async function editComment( axiosPrivate, type, blogType, blogItem, commentText, commentId, commentIndex, newDate) {
  const controller = new AbortController()

  try {
    const res = await axiosPrivate.post(`/comment/edit`, {
      type: type,
      blogType: blogType,
      blogItem: blogItem,
      commentText: commentText,
      commentId: commentId,
      commentIndex: commentIndex,
      newDate: newDate,
      signal: controller.signal
    })
    controller.abort()
    return res.data
  } catch(error) {
    console.log(error.message)
    return error.message
  }
}

export async function deleteComment( axiosPrivate, type, blogType, blogItem, commentId, commentIndex ) {
  const controller = new AbortController()

  try {
    const res = await axiosPrivate.post(`/comment/delete`, {
      type: type,
      blogType: blogType,
      blogItem: blogItem,
      commentId: commentId,
      commentIndex: commentIndex,
      signal: controller.signal
    })
    controller.abort()
    return res.data
  } catch(error) {
    console.log(error.message)
    return error.message
  }
}