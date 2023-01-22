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
      <Nav /*onSearch={onSearch}*/ />
      {city && <div className={styles.card}>
        <Card
          key={city.id}
          name={city.name}
          min={city.min}
          max={city.max}
          img={img}
          id={city.id}
          onClose={(e) => onClose(e)}/>
      </div>}
    </div>
  )
};
