import React, {useState} from 'react';
import styles from './SearchBar.module.css'

export function SearchBar(props){
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function onSubmit(e) {
        if(typeof props.search === "function") {
            props.search(term, location)
        }
        console.log(term, location);
        e.preventDefault();
    }

    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <form onSubmit={onSubmit}>

            <div class="field has-addons">

                <p className="control">
                    <button className={`button is-static ${sizeClass}`}> Search </button>
                </p>

                    <p className="control">
                        <input className={`input ${sizeClass}`}
                              onChange={(e) => setTerm(e.target.value)}

                               type="text"
                               value = {term}
                               placeholder="Farmers Markets, strawberries, cash"/>
                    </p>

                <p className="control">
                    <button className={`button is-static ${sizeClass}`}> Near</button>
                </p>

                <p className="control">
                    <input className={`input ${sizeClass}`}
                           onChange={(e) => setLocation(e.target.value)}

                           type="text"
                           value = {location}
                           placeholder="where"/>
                </p>

                <button className={`button ${sizeClass} ${styles[`search-button`]}`} onSubmit={onSubmit}>
                    <span className="icon is-small">
                       <i className="fas fa-search"></i>
                    </span>
                </button>

            </div>
        </form>
    );
}