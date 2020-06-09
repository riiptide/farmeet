import React from 'react';
import {TopNav} from "./TopBar/TopBar";
import logo from '../assets/logo.png'
import styles from './landingpage.module.css'
import {SearchBar} from "../SearchBar/SearchBar";
import useReactRouter from 'use-react-router';

export function LandingPage() {

    const {history} = useReactRouter();
    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&&find_loc=${urlEncodedLocation}`)

    }

    return (
        <div className={styles[`search-area`]}>
            <TopNav/>
            <img src={logo} className={styles.logo} alt='logo' />
            <SearchBar search = {search}/>
        </div>


    );

}

