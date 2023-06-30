import {Api} from "../core/api";
import {AxiosInstance} from "axios";

class WeatherService {
    private api:AxiosInstance;
    constructor(a:AxiosInstance) {
        this.api = a;
    }

    async getCurrentWeather(query:string | string[]) {
        const {data} =  await this.api.get(`/current.json?q=${query}`)
        return data
    }
}

export default new WeatherService(Api);