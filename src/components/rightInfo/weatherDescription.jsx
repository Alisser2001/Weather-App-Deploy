import styles from "./weatherDescription.module.css";

export default function WeatherDescription({ city }) {
    return (
        <div className={styles.descriptionCont}>
            <p className={styles.weatDescription}>{city.description}</p>
        </div>
    )
}