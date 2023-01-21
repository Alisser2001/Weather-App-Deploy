import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Card.module.css';

export default function Card({ min, max, img, onClose, name, id }) {
  // acá va tu código
  let imgClima = `http://openweathermap.org/img/wn/${img}@2x.png`;
  return (
    <div className={styles.container}>
      <div className={styles.contBtn}>
        <button onClick={onClose} className={styles.btnClose}>X</button>
      </div>
      {/*<Link to={`/ciudad/${id}`} className={styles.h1}>
        <h1>{name}</h1>
  </Link>*/}
      <h1 className={styles.h1}>{name}</h1>
      <div className={styles.info}>
        <div>
          <h2 className={styles.h2Min}>Min</h2>
          <p className={styles.pMin}>{min}°</p>
        </div>
        <div>
          <h2 className={styles.h2Max}>Max</h2>
          <p className={styles.pMax}>{max}°</p>
        </div>
        <div>
          <img src={imgClima} alt="" className={styles.img}></img>
        </div>
      </div>
    </div>
  )
};
