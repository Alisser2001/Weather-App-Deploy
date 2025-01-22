import { create } from 'zustand';
import axios from 'axios';

const REACT_APP_API_KEY = import.meta.env.REACT_APP_API_KEY;

const useWeatherStore = create((set) => ({
    city: undefined,

    getInfoByCity: async (city) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`
            );
            set((state) => ({
                ...state,
                city: infoValidator(response.data),
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
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${payload.city},${payload.country}&appid=${REACT_APP_API_KEY}&units=metric`
            );
            set((state) => ({
                ...state,
                city: infoValidator(response.data),
            }));
        } catch (err) {
            set((state) => ({
                ...state,
                city: false,
            }));
        }
    },
    deleteInfo: () => {
        set((state) => ({
            ...state,
            city: undefined,
        }));
    },
}));

function infoValidator(info) {
    if (info !== undefined) {
        const city = {
            name: info.name,
            id: info.id,
            country: info.sys.country,
            description: info.weather[0].description.capitalize(),
            weather: info.weather[0].main,
            wind: info.wind.speed,
            temp: info.main.temp,
            min: Math.round(info.main.temp_min),
            max: Math.round(info.main.temp_max),
            humidity: info.main.humidity,
            clouds: info.clouds.all,
            lat: info.coord.lat,
            long: info.coord.lon,
            img: info.weather[0].icon,
        };
        return city;
    } else {
        return {};
    }
}

Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
});

export default useWeatherStore;
