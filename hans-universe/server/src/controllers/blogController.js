import { switchBlogModel } from "../utils/utils.js"

const getBlogDatas = async (req,res) => {
  const blogType = req.body.blogType
  const BlogModel = switchBlogModel(blogType)

  try {
    const fechedDatas = await BlogModel.find({})
    res.status(200)
    res.json(fechedDatas)
  } catch(error) {
    res.status(500)
    res.json({ message: error.message })
  }
}

const getBlogItem = async (req,res) => {
  const blogType = req.body.blogType
  const blogId = req.body.blogId
  const BlogModel = switchBlogModel(blogType)

  try {
    const blogItem = await BlogModel.findById(blogId)

    console.log(blogItem)

    if(!blogItem) {
      res.status(404)
      res.json({ message: "No such Item"})
    }
    res.status(200)
    res.json(blogItem)
  } catch(error) {
    res.status(500)
    res.json({ message: error.message })
  }
}

const blogController = {
  getBlogDatas,
  getBlogItem
}

export default blogController