import styles from "../styles/info.module.css";
import useWeatherStore from "../hooks/useStore";
import { useEffect } from "react";

export default function Info() {
    const { city } = useWeatherStore();
    const img = city ? `http://openweathermap.org/img/wn/${city.img}@2x.png` : "";
    useEffect(() => {
    }, [city]);
    return (
        <section>
            {city && <div>
                <div className={styles.titleCont}>
                    <h1 className={styles.city}>{city.name}</h1>
                    <h2 className={styles.country}>{city.country}</h2>
                </div>
                <div className={styles.contBtn}>
                    <button className={styles.btnClose}>X</button>
                </div>
                <div className={styles.info}>
                    <div className={styles.weather}>
                        <h2 className={styles.h2}>Weather:</h2>
                        <p className={styles.p}>{city.weather}</p>
                    </div>
                    <div className={styles.descr}>
                        <h2 className={styles.h2}>Description:</h2>
                        <p className={styles.p}>{city.description}</p>
                    </div>
                    <div className={styles.temp}>
                        <div className={styles.tempGlobal}>
                            <h2 className={styles.h2}>Temperature:</h2>
                            <p className={styles.p}>{city.temp}°</p>
                        </div>
                        <div className={styles.tempSpec}>
                            <h2 className={styles.h2}>Min:</h2>
                            <p className={styles.p}>{city.min}°</p>
                            <h2 className={styles.h2}>Max:</h2>
                            <p className={styles.p}>{city.max}°</p>
                        </div>
                    </div>
                    <div className={styles.aditionalInfo}>
                        <div className={styles.humidity}>
                            <h2 className={styles.h2}>Humidity:</h2>
                            <p className={styles.p}>{city.humidity}°</p>
                        </div>
                        <div className={styles.placeInfo}>
                            <div className={styles.lat}>
                                <h2 className={styles.h2}>Latitude:</h2>
                                <p className={styles.p}>{city.lat}°</p>
                            </div>
                            <div className={styles.long}>
                                <h2 className={styles.h2}>Longitude:</h2>
                                <p className={styles.p}>{city.long}°</p>
                            </div>
                        </div>
                        <div className={styles.atmInfo}>
                            <div className={styles.clouds}>
                                <h2 className={styles.h2}>Cloud cover:</h2>
                                <p className={styles.p}>{city.clouds}°</p>
                            </div>
                            <div className={styles.wind}>
                                <h2 className={styles.h2}>Wind speed:</h2>
                                <p className={styles.p}>{city.wind} km/h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    )
}