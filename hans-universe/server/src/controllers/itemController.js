import ItemModel from "../models/ItemModel.js"

const postImage = async (req, res) => {
  if(req.file) {
    let item = {
      name: req.body.name,
      description: req.body.description,
      itemImage: req.file.filename
    }

    try {
      const postedItem = await ItemModel.create(item)
      console.log(postedItem)
      res.json({ message: "successfully posted" })
    } catch(error) {
      res.json({ message: error.message })
    }

  }
}

const getImage = async (req,res) => {
  const { id } = req.body.id
  try {
    const item = await ItemModel.findById(id)
    if(!item) {
      res.status(404)
      res.json({ message: "Item not founded"})
    }
    res.status(200)
    res.json(item)
  } catch (error) {
    res.status(500)
    res.json({ message: error.message })
  }
}

const postMultipleImage = (req, res) => {
  if(req.files) {
    let items = req.files.map((file) => {
      return {
        name: req.body.name,
        description: req.body.description,
        itemImage: req.body.file
      }
    })

    console.log(items)
    // let path = ''
    // req.files.forEach((file) => {
    //   path = path + file.path + ","
    // })
    // path = path.substring(0, path.lastIndexOf(","))
    // res.json({ path: path})

  }
}

const itemController = {
  postImage,
  postMultipleImage
}

export default itemController