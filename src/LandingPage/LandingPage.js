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
        const urlEncodedCredit = encodeURI(credit);
        const urlencodedWIC = encodeURI(WIC);
        const urlencodedWICcash = encodeURI(WICcash);
        const urlencodedSFMNP = encodeURI(SFMNP);
        const urlencodedSNAP = encodeURI(SNAP);
        const urlencodedOrganic = encodeURI(Organic);

        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}&products=${urlEncodedProducts}&credit=${urlEncodedCredit}&WIC=${urlencodedWIC}&WICcash=${urlencodedWICcash}&SFMNP=${urlencodedSFMNP}&SNAP=${urlencodedSNAP}&Organic=${urlencodedOrganic}`);
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