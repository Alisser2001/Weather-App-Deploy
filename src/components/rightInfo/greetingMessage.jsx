import { useState, useEffect } from "react";
import styles from "./greetingMessage.module.css";

export default function GreetingMessage() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles.greetingMessageCont}>
            <h1 className={styles.greetingMessage}>{getGreetingMessage(currentTime.getHours())}</h1>
            <h2 className={styles.actualHour}>
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </h2>
        </div>
    )
}

function getGreetingMessage(currentHour) {
    if (currentHour >= 5 && currentHour < 12) {
        return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "Good Afternoon";
    } else if (currentHour >= 18 && currentHour < 22) {
        return "Good Evening";
    } else {
        return "Good Night";
    }
}