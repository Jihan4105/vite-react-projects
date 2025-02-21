import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  wroteDate: String,
  modifiedDate: String,
  commentsNumber: Number,
  reaction: {
    like: Number,
    likePersons: [],
    hmm: Number,
    hmmPersons: [],
    disagree: Number,
    disagreePersons: []
  },
  commentTree: [
    {
      userId: String,
      date: String,
      content: String,
      thumbsUp: Number,
      thumbsUpPersons: [],
      thumbsDown: Number,
      thumbsDownPersons: [],
      replyNumber: Number,
      replies: [
        {
          userId: String,
          date: String,
          content: String,
          thumbsUp: Number,
          thumbsUpPerson: [],
          thumbsDown: Number,
          thumbsDownPerson: [],
        }
      ]
    }
  ]
})

const booksBlogSchema = new mongoose.Schema({
  title: String,
  genre: String,
  content: String,
  wroteDate: String,
  modifiedDate: String,
  commentsNumber: Number,
  reaction: {
    like: Number,
    likePersons: [],
    hmm: Number,
    hmmPersons: [],
    disagree: Number,
    disagreePersons: []
  },
  commentTree: [
    {
      userId: String,
      date: String,
      content: String,
      thumbsUp: Number,
      thumbsUpPersons: [],
      thumbsDown: Number,
      thumbsDownPersons: [],
      replyNumber: Number,
      replies: [
        {
          userId: String,
          date: String,
          content: String,
          thumbsUp: Number,
          thumbsUpPersons: [],
          thumbsDown: Number,
          thumbsDownPersons: [],
        }
      ]
    }
  ]
})

export const WorkoutModel = mongoose.model("workoutdata", blogSchema)
export const ThoughtsModel = mongoose.model("thoughtsdata", blogSchema)
export const BooksModel = mongoose.model("booksdata", booksBlogSchema)