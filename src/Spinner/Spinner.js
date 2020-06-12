import React from 'react';
import styles from './Spinner.module.css';

export function Spinner() {
    return (
        // <div className={`button is-loading is-large ${styles.spinner}`}>Loading</div>
        <div className={`progress is-large is-info ${styles.spinner}`}>Loading</div>
    );
}