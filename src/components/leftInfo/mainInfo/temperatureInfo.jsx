import styles from './temperatureInfo.module.css';

export default function TemperatureInfo({ temp }) {
    return (
        <section className={styles.temp}>
            <span>
                {temp.toString().split('.')[0]}°
            </span>
        </section>
    )
}