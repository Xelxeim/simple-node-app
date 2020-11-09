const express = require('express');
const router = express.Router();
const moment = require("moment");
const fs = require("fs");

router.get('/', (req, res) => {
    res.send('index.html');
});

router.post('/', (req, res) => {
    const {name, email, age, text} = req.body;
    const data = `${moment().format('MMMM Do YYYY, h:mm:ss a')} Имя - ${name}, Email - ${email}, Возраст - ${age}, Сообщение - ${text} \r\n`;
    fs.appendFile("./public/log", data, (err) => {
        if (err) throw new Error()
    });

    res.status(201).json({message: "Данные добавлены."});
});

router.get('/log', (req, res) => {
    res.send('log');
});

module.exports = router;
