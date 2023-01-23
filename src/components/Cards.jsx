import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css';
import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteInfo } from '../actions';

export default function Cards() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);
  const img = city ? `http://openweathermap.org/img/wn/${city.img}@2x.png` : ""
  function onClose(e) {
    e.preventDefault();
    dispatch(deleteInfo());
  }
  return (
    <div className={styles.container}>
      <Nav/>
      {city && <div className={styles.card}>
        <Card
          key={city.id}
          name={city.name}
          temp={city.temp}
          min={city.min}
          max={city.max}
          weather={city.weather}
          country={city.country}
          humidity={city.humidity}
          description={city.description}
          lat={city.lat}
          long={city.long}
          clouds={city.clouds}
          wind={city.wind}
          img={img}
          onClose={(e) => onClose(e)}/>
      </div>}
    </div>
  )
};
