import axios from "axios";

const Api = axios.create({
    baseURL:`${process.env.WEATHER_API}`
})

Api.interceptors.request.use((config:any) => {
    config.url = `${config.url?.replace(`?`, `?key=${process.env.WEATHER_API_KEY}&`)}`
    return config
})

export  {Api}