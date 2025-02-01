import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  wroteDate: String,
  modifiedDate: String,
  commentsNumber: String,
  reaction: {
    like: Number,
    hmm: Number,
    disagree: Number,
  },
  commentTree: [
    {
      userId: String,
      date: String,
      content: String,
      thumbsUp: Number,
      thumbsDown: Number,
      replyNumber: Number,
      replies: [
        {
          userId: String,
          date: String,
          content: String,
          thumbsUp: Number,
          thumbsDown: Number,
        }
      ]
    }
  ]
})

export const WorkoutModel = mongoose.model("workoutdata", blogSchema)
export const BooksModel = mongoose.model("booksdata", blogSchema)
export const thoughtsModel = mongoose.model("thoughtsdata", blogSchema)