import {Request, Response} from "express";
import WeatherService  from "../services/weather.service";

class WeatherController {
    static async getCurrent(req:Request, res:Response) {
        try {
            const {q} = req.query
            if (!q) {
                throw new Error(`You need to specify a "q" param in order to proceed!`)
            }
            return res.status(200).json(await WeatherService.getCurrentWeather(`${q}`)).end()
        } catch (e:any) {
            return  res.status(404).json({"message":e.message}).end()
        }
    }
}

export default WeatherController
