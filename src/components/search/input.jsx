import styles from "./input.module.css";

export default function Input({ name, placeholder, value, onChange }) {
    return (
        <input
            name={name}
            placeholder={placeholder}
            className={styles.search}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}