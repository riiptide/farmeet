import React from "react";
import styles from './SearchResultsSummary.module.css'

export function SearchResultsSummary() {
    return(

        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>burgers</strong> berlin</h1>
                <p>showing 1-20 out of 420 results</p>
            </div>
        </div>
    );

}