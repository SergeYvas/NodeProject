import express from "express";
import * as config from "./config/config.json";
import cookieParser from "./midldewares/cokieparser";
import queryParser from "./midldewares/queryparser";
import router from './routes'



const app = express();

app.use(cookieParser);
app.use(queryParser);

app.use(router)

export default app;
