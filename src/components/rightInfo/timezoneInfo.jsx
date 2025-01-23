import styles from "./timezoneInfo.module.css";

export default function TimezoneInfo({ city }) {
    return (
        <div className={styles.timezoneCont}>
            <p className={styles.sunrise}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"></path>
                <path d="M3 21l18 0"></path> <path d="M12 9v-6l3 3m-6 0l3 -3"></path>
            </svg>  HJ: {city.sunrise}</p>
            <p className={styles.sunset}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"></path>
                <path d="M3 21l18 0"></path> <path d="M12 3v6l3 -3m-6 0l3 3"></path>
            </svg>  HN: {city.sunset}</p>
        </div>
    )
}