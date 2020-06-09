import React from "react";
import {NavBar} from "../NavBar/NavBar";
import {SearchResultsSummary} from "./SearchResultsSummary/SearchResultsSummary";
import {SearchResults} from "./SearchResults/SearchResults";
import {SearchResult} from "./SearchResults/SearchResult/SearchResult";
import useReactRouter from 'use-react-router';


export function Search() {

    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

    return(
        <div>
            <NavBar term = {term} location = {locationParam} />
            <SearchResultsSummary term = {term} location = {locationParam}/>
            <SearchResults/>
        </div>
    );

}