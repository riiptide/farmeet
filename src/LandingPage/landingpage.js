import React from 'react';
import {TopNav} from "./TopBar/TopBar";
import logo from '../assets/logo.png'
import styles from './landingpage.module.css'
import {SearchBar} from "../SearchBar/SearchBar";
export function LandingPage() {

    return (
        <div>
            <TopNav/>
            <img src={logo} className={styles.logo} alt='logo' />
            <SearchBar/>
        </div>


    );

}

