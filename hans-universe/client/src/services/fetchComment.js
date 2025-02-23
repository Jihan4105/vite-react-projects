export async function createComment( navigate, location, axiosPrivate, blogType, blogItem, newComment, commentIndex) {
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
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
}

export async function editComment( navigate, location, axiosPrivate, type, blogType, blogItem, commentText, commentId, commentIndex, newDate) {
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
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
}

export async function deleteComment( navigate, location, axiosPrivate, type, blogType, blogItem, commentId, commentIndex ) {
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
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
}