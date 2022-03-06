
const express = require('express');

const app = express();

const adminModel = require('./models/admin');

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get('/', (req, res, next) => {
    // res.send("Hello World");
    adminModel.findOne().then(result => {
        res.json({
            data: [result]
        })
    }).catch(err => {
        res.json({
            message: `show me ${err}`,
        });
    });
});


app.post('/', (req, res, next) => {
    const body = req.body;
    // console.log(body);
    adminModel.create(body).then(result => {
        res.json({
            message: "Data Enter",
            data: result
        })
    }).catch(err => {
        res.json({
            message: `show me ${err}`,
        });
    });

});

app.listen(5000, () => {
    console.log('Server is Running');
});