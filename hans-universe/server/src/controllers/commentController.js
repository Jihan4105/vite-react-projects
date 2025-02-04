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
  const { blogItemm, commentText, commentId, newDate } = req.body
  const BlogModel = switchBlogModel(req.body.blogType)

}

const commentController = {
  createComment,
  editComment,
}

export default commentController