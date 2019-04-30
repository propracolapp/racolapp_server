import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './controllers/index';

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
 app.get('/', function (req, res) {
     res.send('Hello World!')
 })
app.listen(process.env.APP_PORT, () => {
    console.log(`Server start on port: ${process.env.APP_PORT}`)
})