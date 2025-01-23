import styles from "./dateInfo.module.css";

export default function DateInfo({ city }) {
    let actualDate = new Date();
    return (
        <div className={styles.dateInfoCont}>
            <h1>{city?.name}, {city?.country}</h1>
            <h1>{actualDate.getDate()}.{actualDate.getMonth() + 1}.{actualDate.getFullYear()}</h1>
        </div>
    )
}