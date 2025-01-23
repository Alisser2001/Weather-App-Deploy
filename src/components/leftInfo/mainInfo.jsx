import styles from "./mainInfo.module.css";
import TemperatureInfo from "./mainInfo/temperatureInfo";
import WeatherInfo from "./mainInfo/weatherInfo";
import WeatherStatus from "./mainInfo/weatherStatus";

export default function MainInfo({ city }) {
    return (
        <div className={styles.mainInfoCont}>
            <TemperatureInfo temp={city.temp} />
            <WeatherInfo clouds={city.clouds} wind={city.wind} humidity={city.humidity} />
            <WeatherStatus img={city.img} weather={city.weather}/>
        </div>
    )
}