"use strict";

// подключаем фреймворк Express
const express = require("express");
const app = express();

// казываем путь к директории со статикой
app.use(express.static(__dirname + "/static"));

// при обращении к сайту отдаем index.html
app.get('/*', function(req, res) {
    res.sendfile("static/index.html");
});

// сервер слушает указанный порт или другой свободный
const port = process.env.PORT || 5333;
app.listen(port);
console.log("Server works on port " + port);