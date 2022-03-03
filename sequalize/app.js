const express = require('express');
const user = require('./models/user');

const app = express();

const users = require('./models/user');

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

app.listen(3000, () => {
    console.log('Server Started');
});