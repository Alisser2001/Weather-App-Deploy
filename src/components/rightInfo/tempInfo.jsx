import styles from "./tempInfo.module.css";

export default function TempInfo({ city }) {
    return (
        <div className={styles.tempMinMax}>
            <p className={styles.tempMin}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                <path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5"></path>
                <path d="M4 9h4"></path>
                <path d="M14.75 4l1 2h2.25"></path>
                <path d="M17 4l-3 5l2 3"></path>
                <path d="M20.25 10l-1.25 2l1.25 2"></path>
                <path d="M22 12h-6l-2 3"></path>
                <path d="M18 18h-2.25l-1 2"></path>
                <path d="M17 20l-3 -5h-1"></path>
                <path d="M12 9l2.088 .008"></path>
            </svg>  Min: {city.min}°</p>
            <p className={styles.tempMax}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                <path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5"></path>
                <path d="M4 9h4"></path>
                <path d="M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 .124"></path>
                <path d="M13 3v1"></path> <path d="M21 12h1"></path>
                <path d="M13 20v1"></path>
                <path d="M19.4 5.6l-.7 .7"></path>
                <path d="M18.7 17.7l.7 .7"></path>
            </svg> Max: {city.max}°</p>
        </div>
    )
}