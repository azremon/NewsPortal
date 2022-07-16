const multer = require('multer');
const path = require('path');
// const { filename } = require('./Resize');

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {

    

    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)

  }


})






const upload = multer({

  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, cb) => {

    const types = / jpeg ||  jpg || png /
    const extName = types.test(path.extname(file.originalname).toLowerCase())
    const mimetype = types.test(file.mimetype)

    console.log(extName)
    console.log(mimetype)
    console.log(file.mimetype)

    if (extName && mimetype) {

      cb(null, true)

    } else {

    cb(new Error('Only Support Images'))

    }

  }
});

module.exports = upload;

