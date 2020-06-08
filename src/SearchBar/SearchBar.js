import React from 'react';
import styles from './SearchBar.module.css'

export function SearchBar(){
    return (
        <div>

            <div class="field has-addons">

                <p className="control">
                    <button className="button is-static is-medium"> Search </button>
                </p>

                    <p className="control">
                        <input className="input is-medium" type="text" placeholder="Farmers Markets, strawberries, cash"/>
                    </p>

                <p className="control">
                    <button className="button is-static is-medium"> Near</button>
                </p>

                <p className="control">
                    <input className="input is-medium" type="text" placeholder="where"/>
                </p>

                <button className={`button is-medium ${styles[`search-button`]}`}>
                    <span className="icon is-small">
                       <i className="fas fa-search"></i>
                    </span>
                </button>

            </div>
        </div>
    );
}