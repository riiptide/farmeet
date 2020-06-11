import React from 'react';
import logo from '../assets/logo.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';

export function NavBar(props) {
    return (
        <div className={styles['nav-bar']}>
            <Link to='/'><img src={logo} className={styles.logo} alt='belb logo' /></Link>
            <SearchBar small term={props.term}  products={props.products} location={props.location} search={props.search} Credit={props.Credit}
                       WIC={props.WIC} WICcash={props.WICcash} SFMNP={props.SFMNP} SNAP={props.SNAP} Organic={props.Organic}
            />
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    );
}