const postImage =  (req, res) => {
  if(req.file) {
    console.log(req.file)
    res.json(req.file)
  }
}

const postMultipleImage = (req, res) => {
  if(req.files) {
    console.log(req.files)
    let path = ''
    req.files.foreach((file) => {
      path = path + file.path + ","
    })
    path = path.substring(0, path.lastIndexOf(","))
    res.json({ path: path})
  }
}

const itemController = {
  postImage,
  postMultipleImage
}

export default itemController