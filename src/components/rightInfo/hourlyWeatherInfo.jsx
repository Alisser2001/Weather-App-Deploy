import styles from "./hourlyWeatherInfo.module.css";

export default function HourlyWeatherInfo({ hourlyWeather }) {
    return (
        <div className={styles.hourlyWeatherCont}>
            <p className={styles.hourlyWeatherDesc}>Hourly Forecast</p>
            <ul className={styles.hourlyWeatherCards}>
                {hourlyWeather && hourlyWeather.map((item, idx) => (
                    <li key={idx + Math.random()*(1000000-1)+1} className={styles.hourlyWeatherCard}>
                        <span className={styles.date}>{item.time}</span>
                        <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt={item.description} width='50' height='50' />
                        <span className={styles.temp}>{item.temp.toString().split('.')[0]}°C</span>
                        <p className={styles.description}>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}