import path from "path"
import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    let fileName = file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    cb(null, fileName)
  }
})

const upload = multer({ 
  dest: "uploads/", 
  storage: storage,
  fileFilter: function(req, file, callback) {
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg") {
      callback(null, true)
    } else {
      console.log("only jpg & png file supported!")
      callback(null, false)
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2
  }
})

export default upload