import React from 'react';
import Logo from '../img/weather-forecast.png'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';

function Nav({ onSearch }) {
    return (
        <nav className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <img id='LogoHenry' src={Logo} alt='Logo Henry' width='30' height='30' />
                <p>WeatherApp</p>
            </Link>
            <SearchBar onSearch={onSearch} />
        </nav>
    );
};

export default Nav;
