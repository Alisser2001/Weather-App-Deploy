import React, { useState } from 'react';
import styles from '../styles/Card.module.css';

export default function Card({
  name,
  temp,
  min,
  max,
  weather,
  country,
  humidity,
  description,
  lat,
  long,
  clouds,
  wind,
  img,
  onClose
}) {
  const [moreInfo, setMoreInfo] = useState(false);
  const handleMoreInfo = (e) => {
    e.preventDefault();
    setMoreInfo(!moreInfo);
  }
  return (
    <div className={styles.container}>
      <div className={styles.titleCont}>
        <h1 className={styles.city}>{name}</h1>
        <h2 className={styles.country}>{country}</h2>
      </div>
      <div className={styles.contBtn}>
        <button onClick={onClose} className={styles.btnClose}>X</button>
      </div>
      <div className={styles.info}>
        {!moreInfo && <>
          <div className={styles.weather}>
            <h2 className={styles.h2}>Weather:</h2>
            <p className={styles.p}>{weather}</p>
          </div>
          <div className={styles.descr}>
            <h2 className={styles.h2}>Description:</h2>
            <p className={styles.p}>{description}</p>
          </div>
          <div className={styles.temp}>
            <div className={styles.tempGlobal}>
              <h2 className={styles.h2}>Temperature:</h2>
              <p className={styles.p}>{temp}°</p>
            </div>
            <div className={styles.tempSpec}>
              <h2 className={styles.h2}>Min:</h2>
              <p className={styles.p}>{min}°</p>
              <h2 className={styles.h2}>Max:</h2>
              <p className={styles.p}>{max}°</p>
            </div>
          </div>
          <div className={styles.foot}>
            <img src={img} alt="" className={styles.img} />
            <a onClick={e => handleMoreInfo(e)} href=" ">More info</a>
          </div></>}
        {moreInfo && <div className={styles.aditionalInfo}>
          <div className={styles.humidity}>
            <h2 className={styles.h2}>Humidity:</h2>
            <p className={styles.p}>{humidity}°</p>
          </div>
          <div className={styles.placeInfo}>
            <div className={styles.lat}>
              <h2 className={styles.h2}>Latitude:</h2>
              <p className={styles.p}>{lat}°</p>
            </div>
            <div className={styles.long}>
              <h2 className={styles.h2}>Longitude:</h2>
              <p className={styles.p}>{long}°</p>
            </div>
          </div>
          <div className={styles.atmInfo}>
            <div className={styles.clouds}>
              <h2 className={styles.h2}>Cloud cover:</h2>
              <p className={styles.p}>{clouds}°</p>
            </div>
            <div className={styles.wind}>
              <h2 className={styles.h2}>Wind speed:</h2>
              <p className={styles.p}>{wind} km/h</p>
            </div>
          </div>
          <div className={styles.foot}>
            <img src={img} alt="" className={styles.img} />
            <a onClick={e => handleMoreInfo(e)} href=" ">Less info</a>
          </div>
        </div>}
      </div>
    </div>
  )
};
