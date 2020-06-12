import React from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';
import {Spinner} from '../../Spinner/Spinner.js';

export function SearchResults(props) {
    let searchResults = <Spinner/>;
    if(props.businesses.length < 1) {
        return (
           <div >
               <section className="section">
                   <div className="container centered">
                       <button className="button is-loading">Loading</button>
                       <button className="button is-loading">Loading</button>
                       <button className="button is-loading">Loading</button>
                       <button className="button is-loading">Loading</button>
                       <button className="button is-primary is-loading">Loading</button>
                       <button className="button is-link is-loading">Loading</button>
                       <button className="button is-info is-loading">Loading</button>
                       <button className="button is-success is-loading">Loading</button>
                       <button className="button is-warning is-loading">Loading</button>
                       <button className="button is-danger is-loading">Loading</button>
                   </div>
               </section>

           </div>
        );
    }
    if(props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
    }

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}
