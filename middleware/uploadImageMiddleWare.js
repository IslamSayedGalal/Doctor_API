const multer = require('multer');
const ApiError = require('../utils/apiError');

// middleware function to check for uploaded file and image for the book
const storageBook = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'bookImage' && file.mimetype === 'image/jpeg') {
            const bookImageName = `book-${Date.now()}-cover.jpeg`;
            req.body.bookImage = bookImageName;
            file.originalname = bookImageName;
            cb(null, 'uploads/BooksImage/');
        }else if (file.fieldname === 'bookFile' && file.mimetype === 'application/pdf') {
            const bookFileName = `book-${Date.now()}-file.pdf`;
            req.body.bookFile = bookFileName;
            file.originalname = bookFileName;
            cb(null, 'uploads/BooksFile/');
        }else {
            cb({ message: 'Unsupported file format' }, false);
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
exports.uploadForBook = multer({ storage: storageBook });


const storageUser = multer.diskStorage({
    destination: function (req, file, cb) {
        const userImageName = `user-${Date.now()}.jpeg`;
        req.body.profileImage = userImageName;
        file.originalname = userImageName;
        cb(null, 'uploads/users/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
exports.uploadForUser = multer({ storage: storageUser });