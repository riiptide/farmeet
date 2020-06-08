import React from 'react';
import styles from './TopBar.module.css'
export function TopNav() {
    return (
        <div className={styles['hi']}>
            <div className={styles.left}>
                <span> Write a Review </span>
                <span> Events </span>
            </div>

            <div className={styles.right}>
                <span> Log In </span>
                <button className='button'> Sign Up </button>
            </div>

        </div>
    );
}