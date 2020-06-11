import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';

export function Search() {
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const products = params.get('products');
    const credit = params.get('credit');
    const WIC = params.get('WIC');
    const WICcash = params.get('WICcash');
    const SFMNP = params.get('SFMNP');
    const SNAP = params.get('SNAP');
    const Organic = params.get('Organic');
    const lat = 37.774929;
    const long=-122.419418;

    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam,products,credit,WIC,WICcash,SFMNP,SNAP,Organic,lat,long);

    if (!term || !locationParam) {
        history.push('/');
    }

    function search(term, location,products,credit,WIC,WICcash,SFMNP,SNAP,Organic) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        const encodedProducts = encodeURI(products);
        const encodedCredit = credit===true || credit === 1?1:0;
        const encodedWIC = encodeURI(WIC);
        const encodedWICcash = encodeURI(WICcash);
        const encodedSFMNP = encodeURI(SFMNP);
        const encodedSNAP = encodeURI(SNAP);
        const encodedOrganic = encodeURI(Organic);
        const encodedlat = lat;
        const encodedlong =long;


        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}&products=${encodedProducts}&credit=${encodedCredit}
&WIC=${encodedWIC}&WICcash=${encodedWICcash}&SFMNP=${encodedSFMNP}&SNAP=${encodedSNAP}&Organic=${encodedOrganic}&x=${encodedlat}&y=${encodedlong}`);
        performSearch({term, location, products, credit, WIC, WICcash, SFMNP, SNAP, Organic,lat,long});
    }

    return (
        <div>
            <NavBar term={term} location={locationParam} search={search}/>
            <SubNav/>
            <SearchResultsSummary term={searchParams.term}
                                  location={searchParams.location}
                                  products={searchParams.products}
                                  credit={searchParams.credit}
                                  WIC={searchParams.WIC}
                                  WICcash={searchParams.WICcash}
                                  SFMNP={searchParams.SFMNP}
                                  SNAP={searchParams.SNAP}
                                  Organic={searchParams.Organic}
                                  amountResults={amountResults}
                                  shownResults={businesses ? businesses.length : 0}
            />
            <SearchResults businesses={businesses}/>
        </div>
    );
}