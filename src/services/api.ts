import axios from "axios";

export const surveyApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const timezoneApi = axios.create({
  baseURL: process.env.REACT_APP_TIME_ZONE_API_URL,
});
