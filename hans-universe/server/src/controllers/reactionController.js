import { switchBlogModel } from "../utils/utils.js"

const thumbsAdd = async (req, res) => {
  const { type, blogItem, commentId, commentIndex, userId, thumbsType } = req.body
  const BlogModel = switchBlogModel(req.body.blogType)
  let newBlogItem = {...blogItem}

  if(type === "comment") {
    if(thumbsType === "up") {
      newBlogItem.commentTree[commentIndex].thumbsUp += 1
      newBlogItem.commentTree[commentIndex].thumbsUpPersons.push(userId)
      if(newBlogItem.commentTree[commentIndex].thumbsDownPersons.indexOf(userId) !== -1) {
        const findedIndex = newBlogItem.commentTree[commentIndex].thumbsDownPersons.indexOf(userId)
        newBlogItem.commentTree[commentIndex].thumbsDown -= 1;
        newBlogItem.commentTree[commentIndex].thumbsDownPersons.splice(findedIndex, 1)
      } 
    } else {
      newBlogItem.commentTree[commentIndex].thumbsDown += 1
      newBlogItem.commentTree[commentIndex].thumbsDownPersons.push(userId)
      if(newBlogItem.commentTree[commentIndex].thumbsUpPersons.indexOf(userId) !== -1) {
        const findedIndex = newBlogItem.commentTree[commentIndex].thumbsUpPersons.indexOf(userId)
        newBlogItem.commentTree[commentIndex].thumbsUp -= 1;
        newBlogItem.commentTree[commentIndex].thumbsUpPersons.splice(findedIndex, 1)
      } 
    }
  } else {
    newBlogItem.commentTree[commentIndex].replies.forEach((replyItem) => {
      if(replyItem._id === commentId) {
        if(thumbsType === "up") {
          replyItem.thumbsUp += 1
          replyItem.thumbsUpPersons.push(userId)
          if(replyItem.thumbsDownPersons.indexOf(userId) !== -1) {
            const findedIndex = replyItem.thumbsDownPersons.indexOf(userId)
            replyItem.thumbsDown -= 1;
            replyItem.thumbsDownPersons.splice(findedIndex, 1)
          } 
        } else {
          replyItem.thumbsDown += 1
          replyItem.thumbsDownPersons.push(userId)
          if(replyItem.thumbsUpPersons.indexOf(userId) !== -1) {
            const findedIndex = replyItem.thumbsUpPersons.indexOf(userId)
            replyItem.thumbsUp -= 1;
            replyItem.thumbsUpPersons.splice(findedIndex, 1)
          } 
        }
      }
    })
  }

  console.log(newBlogItem)

  try {
    const fetchedBlogItem = await BlogModel.findByIdAndUpdate(blogItem._id, newBlogItem, {
      returnDocument: "after"
    })

    res.status(200)
    res.json(fetchedBlogItem)
  } catch(error) {
    res.status(500)
    res.json({ message: error.message })
  }
}

const thumbsUndo = async (req, res) => {
  const { type, blogItem, commentId, commentIndex, userId, thumbsType } = req.body
  const BlogModel = switchBlogModel(req.body.blogType)
  let newBlogItem = {...blogItem}

  if(type === "comment") {
    if(thumbsType === "up") {
      newBlogItem.commentTree[commentIndex].thumbsUp -= 1
      const findedIndex = newBlogItem.commentTree[commentIndex].thumbsUpPersons.indexOf(userId)
      newBlogItem.commentTree[commentIndex].thumbsUpPersons.splice(findedIndex, 1)
    } else {
      newBlogItem.commentTree[commentIndex].thumbsDown -= 1
      const findedIndex = newBlogItem.commentTree[commentIndex].thumbsDownPersons.indexOf(userId)
      newBlogItem.commentTree[commentIndex].thumbsDownPersons.splice(findedIndex, 1)
    }
  } else {
    newBlogItem.commentTree[commentIndex].replies.forEach((replyItem, replyIndex) => {
      if(replyItem._id === commentId) {
        thumbsType === "up" ? replyItem.thumbsUp -= 1 : replyItem.thumbsDown -= 1
        thumbsType === "up" ? replyItem.thumbsUpPersons.splice(replyIndex, 1) : replyItem.thumbsDownPersons.splice(replyIndex, 1)
        return
      }
    })
  }

  console.log(newBlogItem)

  try {
    const fetchedBlogItem = await BlogModel.findByIdAndUpdate(blogItem._id, newBlogItem, {
      returnDocument: "after"
    })

    res.status(200)
    res.json(fetchedBlogItem)
  } catch(error) {
    res.status(500)
    res.json({ message: error.message })
  }
}

const thumbsController = {
  thumbsAdd,
  thumbsUndo
}

export default thumbsController