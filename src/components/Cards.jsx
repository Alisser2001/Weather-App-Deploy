import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css';
import Nav from '../components/Nav';
import { useState } from 'react';

export default function Cards() {
  const [cities, setCities] = useState([]);
  const { REACT_APP_API_KEY } = process.env;
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities([ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCities(cities => cities.filter(c => c.id !== id))
  }
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.container}>
      <Nav onSearch={onSearch} />
      <div className={styles.card}>{cities.map((city) => <Card
        key={city.id}
        name={city.name}
        min={city.min}
        max={city.max}
        img={city.img}
        id={city.id}
        onClose={() => onClose(city.id)} />
      )}</div>
    </div>
  )
};
