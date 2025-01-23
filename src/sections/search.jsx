import { useState } from "react"
import useWeatherStore from "../hooks/useStore";
import styles from "../styles/search.module.css";
import Input from "../components/search/input";

export default function Search() {
    const { getInfoByCity, getInfoByCityAndCountry } = useWeatherStore();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const handleCity = async (e) => {
        e.preventDefault();
        if (city != '' && country != '') {
            await getInfoByCityAndCountry({ city, country });
        } else if (city) {
            await getInfoByCity(city);
        } else {
            alert("Please enter a city.");
        }
    };
    return (
        <form className={styles.searchCont} onSubmit={handleCity}>
            <Input name='city' placeholder='City...' value={city} onChange={setCity} />
            <Input name='country' placeholder='Country abbreviation (optional)...' value={country} onChange={setCountry} />
            <input type="submit" value="Search" className={styles.submitBtn} />
        </form>
    )
}