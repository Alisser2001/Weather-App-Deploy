import React from "react";
import { useParams } from "react-router-dom";
import styles from '../styles/Ciudad.module.css'

export default function Ciudad({cities}) {
    let {cityId} = useParams();
    function cityID(id){
        return cities.filter(city => city.id === parseInt(id))
    }
    const city = cityID(cityId);
    console.log(city);

    return (
        <div>
                <div className={styles.ciudad}>
                    <h2>{city[0].name}</h2>
                    <div className={styles.datos}>
                        <div>Temperatura: {city[0].temp} ºC</div>
                        <div>Clima: {city[0].weather}</div>
                        <div>Viento: {city[0].wind} km/h</div>
                        <div>Cantidad de nubes: {city[0].clouds}</div>
                        <div>Latitud: {city[0].latitud}º</div>
                        <div>Longitud: {city[0].longitud}º</div>
                    </div>
            </div>
        </div>
    )
}