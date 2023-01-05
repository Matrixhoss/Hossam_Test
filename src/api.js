import axios from "axios";

export const getWether = ({lon , lat}) => axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=9f3e69d707455b75e3242269584f7059`)