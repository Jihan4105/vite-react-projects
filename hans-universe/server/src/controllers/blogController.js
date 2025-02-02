import workoutBlogDatas from "../datas/workoutBlogDatas.js"
import booksBlogDatas from "../datas/booksBlogDatas.js"
import thoughtsBlogDatas from "../datas/thoughtsBlogDatas.js"
import { BooksModel, WorkoutModel, ThoughtsModel } from "../models/BlogModel.js"

const getBlogDatas = async (req,res) => {
  const blogType = req.body.blogType
  let BlogModel

  switch(blogType) {
    case "workout" :
      BlogModel = WorkoutModel 
      break
    case "books" :
      BlogModel = BooksModel
      break
    case "thoughts" :
      BlogModel = ThoughtsModel
      break
  }

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
  let BlogModel

  switch(blogType) {
    case "workout" :
      BlogModel = WorkoutModel 
      break
    case "books" :
      BlogModel = BooksModel
      break
    case "thoughts" :
      BlogModel = ThoughtsModel
      break
  }

  try {
    const blogItem = await BlogModel.findById(blogId)

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