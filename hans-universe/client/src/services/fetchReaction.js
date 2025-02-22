export async function thumbsHandler(navigate, location, axiosPrivate, type, blogType, blogItem, thumbsType, userId, commentIndex, commentId) {
  const controller = new AbortController()

  try {
    const res = await axiosPrivate.post("/reaction/thumbsAdd", {
      type: type,
      blogType: blogType,
      blogItem: blogItem,
      commentId: commentId,
      commentIndex: commentIndex,
      thumbsType: thumbsType,
      userId: userId,
      signal: controller.signal
    })
    controller.abort()
    return res.data
  } catch(error) {
    console.log(error.message)
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
}

export async function UndoThumbsHandler(navigate, location, axiosPrivate, type, blogType, blogItem, thumbsType, userId, commentIndex, commentId) {
  const controller = new AbortController()

  try {
    const res = await axiosPrivate.post("/reaction/thumbsUndo", {
      type: type,
      blogType: blogType,
      blogItem: blogItem,
      commentId: commentId,
      commentIndex: commentIndex,
      thumbsType: thumbsType,
      userId: userId,
      signal: controller.signal
    })
    controller.abort()
    return res.data
  } catch(error) {
    console.log(error.message)
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
}