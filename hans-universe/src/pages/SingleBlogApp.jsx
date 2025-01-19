import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"
import SingleBlog from "@components/SingleBlog"
import Comment from "@components/Comment"

import { UserContext } from "@contexts/UserContext"
import { queryStringToObject } from "@utils/utils"
import { getUserById } from "@services/fetchUserDatas"

function SingleBlogApp() {
  const url = new URL(`${window.location.href}`)
  const queryObject = queryStringToObject(url)
  const user = getUserById(queryObject.userId)

  return (
    <>
      <UserContext.Provider value={user}>
        <Navbar />
        
        <Sidebar />

        <SingleBlog />
        
        <Comment />

        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default SingleBlogApp
