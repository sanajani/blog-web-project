import multer from "multer";

const storage = multer.diskStorage({
    // destination: "uploads",
    destination: function (req, file, cb) {
        // cb(null, 'uploads/')
        cb(null, './public/uploads')
      },
    filename: function (req, file, cb) {
      cb(null,Date.now() + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage }).single('file')

  export {upload}