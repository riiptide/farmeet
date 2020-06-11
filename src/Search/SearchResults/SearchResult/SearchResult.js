import React from 'react';
import styles from './SearchResult.module.css';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';

export function SearchResult(props) {
    const b = props.business;
    console.log(JSON.stringify(b));
    if (!b) {
        return (<div/>);
    }
//     <div>=
//     <option value="BakedGoods">Baked Goods 🥧 </option>
//     <option value="Cheese">Cheese 🧀 </option>
// <option value="Crafts">Crafts 🎨</option>
// <option value="Flowers">Flowers 🌹</option>
// <option value="Eggs">Eggs 🍳</option>
// <option value="Seafood">Seafood 🐟</option>
// <option value="Herbs">Herbs 🌿</option>
// <option value="Vegetables">Vegetables 🍅🌽</option>
// <option value="Honey">Honey 🍯</option>
// <option value="Jams">Jams 🧃</option>
// <option value="Maple">Maple 🍁</option>
// <option value="Meat">Meat 🥩</option>
// <option value="Nursery">Nursery 🌱</option>
// <option value="Nuts">Nuts 🥜</option>
// <option value="Plants">Plants 🌱</option>
// <option value="Poultry">Poultry 🍗</option>
// <option value="Prepared">Prepared 🥘</option>
// <option value="Soap">Soap 🧼</option>
// <option value="Trees">Trees 🌳</option>
// <option value="Wine">Wine 🍷</option>
// <option value="Coffee">Coffee ☕️</option>
// <option value="Beans">Beans 🧆</option>
// <option value="Fruits">Fruits 🍉</option>
// <option value="Grains">Grains 🌾</option>
// <option value="Juice">Juice 🧃</option>
// <option value="Mushrooms">Mushrooms 🍄</option>
// <option value="PetFood">PetFood 🐶</option>
// <option value="Tofu">Tofu 🥟</option>
// <option value="WildHarvested">Wild Harvested 🍇🥦</option>
//
//     </div>

    // const tags = b.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={b.id + category.title}>{category.title}</span>));
    // const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);
    const addressLines = b.street;

    return (



        <div className={styles['search-result']}>
            <img src={b.image_url} alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>

                <h2 className="subtitle"><strong>{b.MarketName} </strong>- {b.sim_pct}% Match </h2>
                {/*<BusinessRating reviewCount={b.review_count} rating={b.rating}/>*/}
                {/*<p> {tags} </p>*/}
                <p> hi </p>
                <br></br>
                <a href = {b.Website}> {b.Website} </a>
            </div>
            <div className={styles['contact-info']}>
                <p>{b.phone}</p>
                {addressLines}
            </div>

            <div className={styles['contact-info']}>
               <p> WIC-check</p>
               <p> Organic-Check </p>
            </div>

        </div>


    )
}