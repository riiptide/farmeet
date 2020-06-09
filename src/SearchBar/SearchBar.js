import React from 'react';
import styles from './SearchBar.module.css'

export function SearchBar(props){
    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <div>

            <div class="field has-addons">

                <p className="control">
                    <button className={`button is-static ${sizeClass}`}> Search </button>
                </p>

                    <p className="control">
                        <input className={`input ${sizeClass}`} type="text" placeholder="Farmers Markets, strawberries, cash"/>
                    </p>

                <p className="control">
                    <button className={`button is-static ${sizeClass}`}> Near</button>
                </p>

                <p className="control">
                    <input className={`input ${sizeClass}`} type="text" placeholder="where"/>
                </p>

                <button className={`button ${sizeClass} ${styles[`search-button`]}`}>
                    <span className="icon is-small">
                       <i className="fas fa-search"></i>
                    </span>
                </button>

            </div>
        </div>
    );
}