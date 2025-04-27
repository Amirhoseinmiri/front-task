import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: "https://api-football-v1.p.rapidapi.com/v3/", // Base URL for Football API
  baseURL: "https://v3.football.api-sports.io/",
  headers: {
    "X-RapidAPI-Key": "b2a24f217338dff53258f40d702dc02b", // API key from .env.local
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
