const express = require('express');
const user = require('./models/user');
const multer = require('multer');
const app = express();
const users = require('./models/user');


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        // cb(null, file.filename + '-' + file.originalname);
        cb(null, file.fieldname + "-" + Date.now() + '-' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};


//Use Multer For Image
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));

//encoded and static path
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res, next) => {
    user.findAll().then(result => {
        console.log(result);
        res.json(result)
    }).catch(err => {
        console.log(err);
    })

});

app.post('/', (req, res, next) => {
    const body = req.body;
    console.log(body);
    users.create(body).then(result => {
        console.log(result);
        res.json({
            message: 'userCreated',
            success: true
        })
    }).catch(err => {
        console.log(err);
    })
});

app.listen(5000, () => {
    console.log('Server Started');
});