import styles from "../styles/leftInfo.module.css";
import useWeatherStore from "../hooks/useStore";
import { useEffect, useState } from "react";
import MainInfo from "../components/leftInfo/mainInfo";
import { getDailyWeather } from "../utils/getDailyWeather";

export default function LeftInfo() {
    const { city, forecast } = useWeatherStore();
    let actualDate = new Date();
    const [dailyWeather, setDailyWeather] = useState(null);

    useEffect(() => {
        if (!dailyWeather && forecast) {
            setDailyWeather(getDailyWeather(forecast));
        }
    }, [city, forecast, dailyWeather]);

    return (
        <section className={styles.leftCont}>
            <div className={styles.titleCont}>
                <h1 className={styles.city}>{city?.name}, {city?.country}</h1>
                <h1>{actualDate.getDate()}.{actualDate.getMonth() + 1}.{actualDate.getFullYear()}</h1>
            </div>
            <MainInfo city={city} />
            <ul className={styles.dailyWeatherCont}>
                {dailyWeather && dailyWeather.map((item, idx) => (
                    <li key={idx} className={styles.daily}>
                        <span className={styles.date}>{item.date}</span>
                        <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt={item.description} width='70' height='70'/>
                        <span className={styles.temp}>{item.temp.toString().split('.')[0]}°C</span>
                        <p className={styles.description}>{item.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
