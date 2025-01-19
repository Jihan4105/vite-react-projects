import booksBlogDatas from "@data/booksBlogDatas";
import thoughtsBlogDatas from "@data/thoughtsBlogDatas";
import workoutBlogDatas from "@data/workoutBlogDatas";

export function getBlogItemByIndex(type, blogIndex) {
  switch(type) {
    case "books" :
      return booksBlogDatas[blogIndex]
    case "workout" :
      return workoutBlogDatas[blogIndex]
    case "thoughts" :
      return thoughtsBlogDatas[blogIndex]
  }
} 