import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import api from './controllers/index';
import cors from 'cors';


const start = async() =>{
    try {
        const app = express();
        dotenv.config();
        
        app.use(bodyParser.json());
        app.use(cors());

        app.use(bodyParser.urlencoded({
            extended: false
        }));
         app.get('/hello', function (req, res) {
             res.send('Hello World!')
         })
        app.get('/', function (req, res) {
            res.send('Hello World!')
        })
        app.listen(process.env.APP_PORT, () => {
            console.log(`Server start on port: ${process.env.APP_PORT}`)
        })
        
    } catch(err) {
        console.log(`Error server doesn't reply`);
    }
}

start();