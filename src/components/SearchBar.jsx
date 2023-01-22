import React from 'react';
import styles from '../styles/SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {getInfoByCity} from '../actions/index';

export default function SearchBar() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const setStateCity = (data) => {
    dispatch(getInfoByCity(data.city));
  };
  return (
    <form onSubmit={handleSubmit(setStateCity)} className={styles.container}>
      <input
        name="city"
        placeholder="Ciudad..."
        className={styles.search}
        {...register("city", {required: true})}
      />
      <input type="submit" value="Agregar" className={styles.btn} />
    </form>
  )
};
