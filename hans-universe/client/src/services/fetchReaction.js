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
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
}

export async function undoThumbsHandler(navigate, location, axiosPrivate, type, blogType, blogItem, thumbsType, userId, commentIndex, commentId) {
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
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
}

export async function likeHandler(navigate, location, axiosPrivate, blogType, blogItem, userId) {
  const controller = new AbortController()

  try {
    const res = await axiosPrivate.post("/reaction/likeThisBlog", {
      blogType: blogType,
      blogItem: blogItem,
      userId: userId,
      signal: controller.signal
    })
    controller.abort()
    return res.data
  } catch(error) {
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
} 

export async function hmmHandler(navigate, location, axiosPrivate, blogType, blogItem, userId) {
  const controller = new AbortController()

  try {
    const res = await axiosPrivate.post("/reaction/hmmThisBlog", {
      blogType: blogType,
      blogItem: blogItem,
      userId: userId,
      signal: controller.signal
    })
    controller.abort()
    return res.data
  } catch(error) {
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
}

export async function disagreeHandler(navigate, location, axiosPrivate, blogType, blogItem, userId) {
  const controller = new AbortController()

  try {
    const res = await axiosPrivate.post("/reaction/disagreeThisBlog", {
      blogType: blogType,
      blogItem: blogItem,
      userId: userId,
      signal: controller.signal
    })
    controller.abort()
    return res.data
  } catch(error) {
    alert("Please Loginback, your refreshToken Expired")
    navigate("/", { state: { from: location }, replace: true})
  }
} 