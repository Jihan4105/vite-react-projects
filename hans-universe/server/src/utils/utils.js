import { WorkoutModel, BooksModel, ThoughtsModel } from "../models/BlogModel.js";

export function switchBlogModel(blogType) {
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

  return BlogModel
}

export function generateAccesToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3m"})
}