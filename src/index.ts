import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config({path:`.env.${process.env.NODE_ENV}`})
import WeatherController from "./controller/weather.controller";

const port = 8080

const app = express()
app.use(cors())

app.get(`/weather`, WeatherController.getCurrent);
app.listen(port, () => console.log(`Weather API started at port ${port}`))