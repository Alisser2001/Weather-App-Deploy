import styles from "./dailyWeatherInfo.module.css";

export default function DailyWeatherInfo({ dailyWeather }) {
    return (
        <ul className={styles.dailyWeatherCards}>
            {dailyWeather && dailyWeather.map((item, idx) => (
                <li key={idx + Math.random()*(1000000-1)+1} className={styles.dailyWeatherCard}>
                    <span className={styles.date}>{item.date}</span>
                    <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt={item.description} width='70' height='70' />
                    <span className={styles.temp}>{item.temp.toString().split('.')[0]}°C</span>
                    <p className={styles.description}>{item.description}</p>
                </li>
            ))}
        </ul>
    )
}