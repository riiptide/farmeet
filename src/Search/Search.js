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
    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam,products,credit);

    if (!term || !locationParam) {
        history.push('/');
    }

    function search(term, location,products,credit) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        const encodedProducts = encodeURI(products);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}&products=${encodedProducts}&credit=${credit}`);
        performSearch({term, location, products,credit});
    }

    return (
        <div>
            <NavBar term={term} location={locationParam} search={search}/>
            <SubNav/>
            <SearchResultsSummary term={searchParams.term}
                                  location={searchParams.location}
                                  products={searchParams.products}
                                  credit={searchParams.credit}
                                  amountResults={amountResults}
                                  shownResults={businesses ? businesses.length : 0}
            />
            <SearchResults businesses={businesses}/>
        </div>
    );
}