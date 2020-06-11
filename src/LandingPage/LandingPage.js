import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css'
import { SearchBar } from '../SearchBar/SearchBar';

import useReactRouter from 'use-react-router';

export function LandingPage() {
    const {history} = useReactRouter();

    function search(term, location, products,credit,WIC, WICcash,SFMNP,SNAP,Organic) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        const urlEncodedProducts = encodeURI(products);
        const urlEncodedCredit = credit===true || credit === 1?1:0;
        const urlencodedWIC = WIC===true || WIC === 1?1:0;
        const urlencodedWICcash = WICcash===true || WICcash === 1?1:0;
        const urlencodedSFMNP = SFMNP===true || SFMNP === 1?1:0;
        const urlencodedSNAP = SNAP===true || SNAP === 1?1:0;
        const urlencodedOrganic = Organic===true || Organic === 1?1:0;
        const lat = 37.774929;
        const long=-122.419418;

        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}&products=${urlEncodedProducts}&Credit=${urlEncodedCredit}&WIC=${urlencodedWIC}&WICcash=${urlencodedWICcash}&SFMNP=${urlencodedSFMNP}&SNAP=${urlencodedSNAP}&Organic=${urlencodedOrganic}&x=${lat}&y=${long}`);
    }

    return (
        <div className={styles.landing}>
            <div className={styles['search-area']}>
                <TopNav/>
                <img src={logo} className={styles.logo} alt='logo'/>
                <SearchBar search={search} />

            </div>
        </div>
    );
}