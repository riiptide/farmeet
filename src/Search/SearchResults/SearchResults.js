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

                       <progress className="progress is-medium is-success" max="50">60%</progress>


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
