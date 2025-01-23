import styles from "./locationInfo.module.css";

export default function LocationInfo({ city }) {
    return (
        <div className={styles.locationCont}>
            <p className={styles.longitude}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M11.5 3a11.2 11.2 0 0 0 0 18"></path>
                <path d="M12.5 3a11.2 11.2 0 0 1 0 18"></path>
                <path d="M12 3l0 18"></path>
            </svg> Lon: {city.long}°</p>
            <p className={styles.latitude}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" strokeWidth="1.5">
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M4.6 7l14.8 0"></path> <path d="M3 12l18 0"></path>
                <path d="M4.6 17l14.8 0"></path>
            </svg> Lat: {city.lat}°</p>
        </div>
    )
}