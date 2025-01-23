import styles from "../styles/rightInfo.module.css";
import useWeatherStore from "../hooks/useStore";
import { useEffect, useState } from "react";
import MainInfo from "../components/rightInfo/mainInfo";
import { getHourlyWeather } from "../utils/getHourlyWeather";

export default function RightInfo() {
    const { city, forecast } = useWeatherStore();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [hourlyWeather, setHourlyWeather] = useState(null);

    useEffect(() => {
        if (!hourlyWeather && forecast) {
            setHourlyWeather(getHourlyWeather(forecast));
        }
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, [city]);
    return (
        <section className={styles.rightCont}>
            <div className={styles.greetingMessageCont}>
                <h1 className={styles.greetingMessage}>{getGreetingMessage(currentTime.getHours())}</h1>
                <h2 className={styles.actualHour}>
                    {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </h2>
            </div>
            <div className={styles.descriptionCont}>
                <p className={styles.weatDescription}>{city.description}</p>
            </div>
            <MainInfo city={city} />
            <div className={styles.tempMinMax}>
                <p className={styles.tempMin}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                    <path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5"></path>
                    <path d="M4 9h4"></path>
                    <path d="M14.75 4l1 2h2.25"></path>
                    <path d="M17 4l-3 5l2 3"></path>
                    <path d="M20.25 10l-1.25 2l1.25 2"></path>
                    <path d="M22 12h-6l-2 3"></path>
                    <path d="M18 18h-2.25l-1 2"></path>
                    <path d="M17 20l-3 -5h-1"></path>
                    <path d="M12 9l2.088 .008"></path>
                </svg>  Min: {city.min}°</p>
                <p className={styles.tempMax}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                    <path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5"></path>
                    <path d="M4 9h4"></path>
                    <path d="M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 .124"></path>
                    <path d="M13 3v1"></path> <path d="M21 12h1"></path>
                    <path d="M13 20v1"></path>
                    <path d="M19.4 5.6l-.7 .7"></path>
                    <path d="M18.7 17.7l.7 .7"></path>
                </svg> Max: {city.max}°</p>
            </div>
            <div className={styles.tempMinMax}>
                <p className={styles.tempMin}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                    <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"></path>
                    <path d="M3 21l18 0"></path> <path d="M12 9v-6l3 3m-6 0l3 -3"></path>
                </svg>  HJ: {city.sunrise}</p>
                <p className={styles.tempMax}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                    <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"></path>
                    <path d="M3 21l18 0"></path> <path d="M12 3v6l3 -3m-6 0l3 3"></path>
                </svg>  HN: {city.sunset}</p>
            </div>
            <div className={styles.tempMinMax}>
                <p className={styles.tempMin}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M11.5 3a11.2 11.2 0 0 0 0 18"></path>
                    <path d="M12.5 3a11.2 11.2 0 0 1 0 18"></path>
                    <path d="M12 3l0 18"></path>
                </svg> Lon: {city.long}°</p>
                <p className={styles.tempMax}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M4.6 7l14.8 0"></path> <path d="M3 12l18 0"></path>
                    <path d="M4.6 17l14.8 0"></path>
                </svg> Lat: {city.lat}°</p>
            </div>
            <div className={styles.descriptionCont}>
                <p className={styles.hourDescription}>Hourly Forecast</p>
                <ul className={styles.hourlyWeatherCont}>
                    {hourlyWeather && hourlyWeather.map((item, idx) => (
                        <li key={idx} className={styles.hourly}>
                            <span className={styles.date}>{item.time}</span>
                            <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt={item.description} width='50' height='50' />
                            <span className={styles.temp}>{item.temp.toString().split('.')[0]}°C</span>
                            <p className={styles.description}>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function getGreetingMessage(currentHour) {
    if (currentHour >= 5 && currentHour < 12) {
        return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "Good Afternoon";
    } else if (currentHour >= 18 && currentHour < 22) {
        return "Good Evening";
    } else {
        return "Good Night";
    }
}
