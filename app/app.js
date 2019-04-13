import express from "express";
import * as config from "./config/config.json";
import cookieParser from "./midldewares/cokieparser";
import queryParser from "./midldewares/queryparser";
import router from './routes';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import fillInDB from './dbUtils';
mongoose.Promise = global.Promise;

const app = express();


console.log(config.dbString)
mongoose.connect(config.dbString)
    .then(() =>  console.log('connected to db'))
    .then(() => fillInDB())
    .catch((err) => console.error(err));


app.use(cookieParser);
app.use(queryParser);

app.use(router)

export default app;
