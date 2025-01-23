import styles from "./weatherInfo.module.css";

export default function WeatherInfo({clouds, wind, humidity}) {
    return (
        <section className={styles.compInfo}>
            <p><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="28"
                height="28"
                strokeWidth="1.5"
            >
                <path d="M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c.956 0 1.822 .39 2.449 1.02"></path>
                <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M19.001 15.5v1.5"></path>
                <path d="M19.001 21v1.5"></path>
                <path d="M22.032 17.25l-1.299 .75"></path>
                <path d="M17.27 20l-1.3 .75"></path>
                <path d="M15.97 17.25l1.3 .75"></path>
                <path d="M20.733 20l1.3 .75"></path>
            </svg>{clouds} %</p>
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
            </svg>{wind} km/h</p>
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
            </svg>{humidity} %</p>
        </section>
    )
}