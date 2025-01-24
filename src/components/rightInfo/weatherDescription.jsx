import styles from "./weatherDescription.module.css";

export default function WeatherDescription({ city, img }) {
    return (
        <div className={styles.descriptionCont}>
            <span className={styles.weatherImgCont}>
                <img src={img} width='40' height='40'/>
            </span>
            <p className={styles.weatDescription}>{city.description}</p>
        </div>
    )
}