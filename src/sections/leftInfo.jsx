import styles from "../styles/leftInfo.module.css";
import useWeatherStore from "../hooks/useStore";
import { useEffect, useState } from "react";
import MainInfo from "../components/leftInfo/mainInfo";
import { getDailyWeather } from "../utils/getDailyWeather";
import DateInfo from "../components/leftInfo/dateInfo";
import DailyWeatherInfo from "../components/leftInfo/dailyWeatherInfo";

export default function LeftInfo() {
    const { city, forecast } = useWeatherStore();
    const [dailyWeather, setDailyWeather] = useState(null);
    useEffect(() => {
        if (!dailyWeather && forecast) {
            setDailyWeather(getDailyWeather(forecast));
        }
    }, [city, forecast, dailyWeather]);

    return (
        <section className={styles.leftCont}>
            <DateInfo city={city} />
            <MainInfo city={city} />
            <DailyWeatherInfo dailyWeather={dailyWeather} />
        </section>
    );
}
