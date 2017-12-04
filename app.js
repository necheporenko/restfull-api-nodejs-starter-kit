import express from 'express';
import bodyParser from 'body-parser'; //for JSON parse

export const app = express();

app.use(bodyParser.urlencoded ({ extended: true })); //Express не может самостоятельно обрабатывать формы в URL-кодировке

module.exports = app;