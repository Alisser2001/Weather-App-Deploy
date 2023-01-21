import React, {useState} from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState('')
  const setStateCity = (e) => {setCity(e.target.value)};
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }} className={styles.container}>
      <input
        type="text"
        placeholder="Ciudad..."
        className={styles.search}
        onChange={setStateCity}
        value={city}
      />
      <input type="submit" value="Agregar" className={styles.btn}/>
    </form>
  )
};
