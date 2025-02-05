import { switchBlogModel } from "../utils/utils.js"

const createComment = async (req, res) => {
  const blogItem = req.body.blogItem
  const newComment = req.body.newComment
  const commentIndex = req.body.commentIndex
  const BlogModel = switchBlogModel(req.body.blogType)
  const newBlogItem = { ...blogItem }

  if(commentIndex === undefined) {
    newBlogItem.commentsNumber += 1
    newBlogItem.commentTree.push(newComment)
  } else {
    newBlogItem.commentsNumber += 1
    newBlogItem.commentTree[commentIndex].replyNumber += 1
    newBlogItem.commentTree[commentIndex].replies.push(newComment)
  }

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

const editComment = async (req, res) => {
  const { type, blogItem, commentText, commentId, commentIndex, newDate } = req.body
  const BlogModel = switchBlogModel(req.body.blogType)
  let newBlogItem = {...blogItem}

  if(type === "comment") {
    newBlogItem.commentTree[commentIndex].content = commentText
    newBlogItem.commentTree[commentIndex].date = newDate
  } else {
    newBlogItem.commentTree[commentIndex].replies.forEach((replyItem, index) => {
      if(replyItem._id === commentId) {
        replyItem.content = commentText
        replyItem.date = newDate
      }
    })
  }


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

const deleteComment = async (req, res) => {
  const { type, blogItem, commentId, commentIndex } = req.body
  const BlogModel = switchBlogModel(req.body.blogType)
  let newBlogItem = {...blogItem}

  if( type === "comment" ) {
    newBlogItem.commentTree.splice(commentIndex, 1)
  } else {
    let replyIndex
    newBlogItem.commentTree[commentIndex].replies.forEach((replyItem, index) => {
      if(replyItem._id === commentId) {
        replyIndex = index
        return;
      }
    })
    newBlogItem.commentTree[commentIndex].replies.splice(replyIndex, 1)
  }

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

const commentController = {
  createComment,
  editComment,
  deleteComment,
}

export default commentController