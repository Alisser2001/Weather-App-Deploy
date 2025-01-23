import styles from "./weatherStatus.module.css";

export default function WeatherStatus({ feels_like }) {
    return (
        <div className={styles.feelsCont}>
            <p className={styles.feels}>Feels Like {feels_like.toString().split('.')[0]}°</p>
        </div>
    )
}