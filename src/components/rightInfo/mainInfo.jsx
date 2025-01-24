import styles from "./mainInfo.module.css";
import TemperatureInfo from "./mainInfo/temperatureInfo";
import WeatherInfo from "./mainInfo/weatherInfo";
import WeatherStatus from "./mainInfo/weatherStatus";

export default function MainInfo({ city }) {
    return (
        <div className={styles.mainInfoCont}>
            <TemperatureInfo temp={city.temp} />
            <WeatherInfo wind={city.wind} humidity={city.humidity} clouds={city.clouds}/>
            <WeatherStatus feels_like={city.feels_like}/>
        </div>
    )
}