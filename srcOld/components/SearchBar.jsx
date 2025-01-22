import React from 'react';
import styles from '../styles/SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getInfoByCity, getInfoByCityAndCountry } from '../actions/index';

export default function SearchBar() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const setStateCity = (data) => {
    if (data.country) {
      dispatch(getInfoByCityAndCountry(data))
    } else {
      dispatch(getInfoByCity(data.city));
    }
  };
  return (
    <form onSubmit={handleSubmit(setStateCity)} className={styles.container}>
      <div className={styles.inputs}>
        <input
          name="city"
          placeholder="City..."
          className={styles.search}
          {...register("city", { required: true })}
        />
        <input
          name="country"
          placeholder="Country abbreviation..."
          className={styles.search}
          {...register("country", { required: false })}
        />
      </div>
      <input type="submit" value="Agregar" className={styles.btn} />
    </form>
  )
};
