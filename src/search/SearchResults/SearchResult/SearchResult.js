import React from "react";
import styles from './SearchResult.module.css'

export function SearchResult() {

    return (
        <div className={styles['search-result']}>

            <img src = 'https://via.placeholder.com/210' alt='business' className={styles['business-image']}/>

            <div className={styles['business-info']}>
                <h2 className= "subtitle"> burger </h2>
                <p>rating</p>
                <p>$$ <span class = "tag"> tag label </span></p>
            </div>



            <div className={styles['contact-info']}>
                <p>phone number</p>
                <p>street</p>
                <p>zipcode</p>

            </div>

        </div>
    );

}