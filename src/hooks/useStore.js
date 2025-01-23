import { create } from 'zustand';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function formatUnixTimestampToTime(unixTimestamp, timezoneOffset) {
    if (!unixTimestamp || timezoneOffset === undefined) {
        return "N/A"; 
    }
    const date = new Date((unixTimestamp + timezoneOffset) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

const useWeatherStore = create((set) => ({
    city: undefined,
    forecast: undefined,

    getInfoByCity: async (city) => {
        try {
            const weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
            );
            set((state) => ({
                ...state,
                city: infoWeatherValidator(weatherResponse.data),
                forecast: forecastResponse.data.list
            }));
        } catch (err) {
            set((state) => ({
                ...state,
                city: false,
            }));
        }
    },
    getInfoByCityAndCountry: async (payload) => {
        try {
            const weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${payload.city},${payload.country}&appid=${API_KEY}&units=metric`
            );
            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${payload.city},${payload.country}&appid=${API_KEY}&units=metric`
            );
            set((state) => ({
                ...state,
                city: infoWeatherValidator(weatherResponse.data),
                forecast: forecastResponse.data.list
            }));
        } catch (err) {
            set((state) => ({
                ...state,
                city: false,
            }));
        }
    }
}));

function infoWeatherValidator(info) {
    if (info !== undefined) {
        const city = {
            name: info.name,
            id: info.id,
            country: info.sys.country,
            description: info.weather[0].description.charAt(0).toUpperCase() + info.weather[0].description.slice(1),
            weather: info.weather[0].main,
            wind: info.wind.speed,
            temp: info.main.temp,
            min: Math.round(info.main.temp_min),
            max: Math.round(info.main.temp_max),
            humidity: info.main.humidity,
            clouds: info.clouds.all,
            lat: info.coord.lat,
            long: info.coord.lon,
            img: `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`,
            feels_like: info.main.feels_like,
            sunrise: formatUnixTimestampToTime(info.sys.sunrise, info.timezone),
            sunset: formatUnixTimestampToTime(info.sys.sunset, info.timezone),
        };
        return city;
    } else {
        return {};
    }
}

export default useWeatherStore;
