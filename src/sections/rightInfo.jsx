import styles from "../styles/rightInfo.module.css";
import useWeatherStore from "../hooks/useStore";
import { useEffect, useState } from "react";
import MainInfo from "../components/rightInfo/mainInfo";
import { getHourlyWeather } from "../utils/getHourlyWeather";
import { getDailyWeather } from "../utils/getDailyWeather";
import GreetingMessage from "../components/rightInfo/greetingMessage";
import TempInfo from "../components/rightInfo/tempInfo";
import TimezoneInfo from "../components/rightInfo/timezoneInfo";
import LocationInfo from "../components/rightInfo/locationInfo";
import HourlyWeatherInfo from "../components/rightInfo/hourlyWeatherInfo";
import WeatherDescription from "../components/rightInfo/weatherDescription";

export default function RightInfo() {
    const { city, forecast } = useWeatherStore();
    const [hourlyWeather, setHourlyWeather] = useState(null);
    const [dailyWeather, setDailyWeather] = useState(null);
    useEffect(() => {
        if (!hourlyWeather && forecast) {
            setHourlyWeather(getHourlyWeather(forecast));
        }
        if (!dailyWeather && forecast) {
            setDailyWeather(getDailyWeather(forecast));
        }
    }, [city, forecast, hourlyWeather, dailyWeather]);
    return (
        <section className={styles.rightCont}>
            <GreetingMessage />
            <WeatherDescription city={city} img={city.img} />
            <MainInfo city={city} />
            <TempInfo city={city} />
            <TimezoneInfo city={city} />
            <LocationInfo city={city} />
            <HourlyWeatherInfo hourlyWeather={hourlyWeather} dailyWeather={dailyWeather} />
        </section>
    );
}


