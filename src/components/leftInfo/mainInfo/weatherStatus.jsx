import styles from "./weatherStatus.module.css";

export default function WeatherStatus({ img, weather }) {
    return (
        <section className={styles.weatherCont}>
            <span className={styles.weatherImgCont}>
                <img src={img} />
            </span>
            <p>{weather}</p>
        </section>
    )
}