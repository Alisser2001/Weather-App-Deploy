import styles from "./mainInfo.module.css";

export default function MainInfo({ city }) {
    return (
        <div className={styles.mainInfoCont}>
            <section className={styles.temp}>
                <span>
                    {city.temp.toString().split('.')[0]}°
                </span>
            </section>
            <section className={styles.compInfo}>
                <p><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="2 2 22 22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                    <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                    <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                </svg>{city.wind} km/h</p>
                <p><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4.072 20.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
                    <path d="M16.072 20.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
                    <path d="M10.072 10.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
                </svg>{city.humidity} %</p>
            </section>
            <div className={styles.feelsCont}>
                <p className={styles.feels}>Feels Like {city.feels_like.toString().split('.')[0]} °</p>
            </div>
        </div>
    )
}