import express from 'express';
import bodyParser from 'body-parser'; //for JSON parse
import routes from './server/routes/index.route';

const app = express();

app.use(bodyParser.urlencoded ({ extended: true })); //Express не может самостоятельно обрабатывать формы в URL-кодировке

/** Mount all routes on /api/v1 path */
app.use('/api/v1', routes);

app.get('/', (req, res) => res.send('Welcome!'));

export default app;