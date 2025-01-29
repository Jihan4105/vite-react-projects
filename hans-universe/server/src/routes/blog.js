import express from "express"
import workoutBlogDatas from "../datas/workoutBlogDatas.js"
import booksBlogDatas from "../datas/booksBlogDatas.js"
import thoughtsBlogDatas from "../datas/thoughtsBlogDatas.js"


const blogRouter = express.Router()

blogRouter.post("/getBlogDatas", (req,res) => {
  const blogType = req.body.blogType

  switch(blogType) {
    case "workout" :
      res.json({ blogDatas: workoutBlogDatas })
      break
    case "books" :
      res.json({ blogDatas: booksBlogDatas })
      break
    case "thoughts" :
      res.json({ blogDatas: thoughtsBlogDatas})
      break
  }
})

blogRouter.post("/getBlogItem", (req,res) => {
  const blogType = req.body.blogType
  const blogIndex = req.body.blogIndex

  switch(blogType) {
    case "workout" :
      res.json({ blogItem: workoutBlogDatas[blogIndex] })
      break
    case "books" :
      res.json({ blogItem: booksBlogDatas[blogIndex] })
      break
    case "thoughts" :
      res.json({ blogItem: thoughtsBlogDatas[blogIndex]})
      break
  }
})

export default blogRouter