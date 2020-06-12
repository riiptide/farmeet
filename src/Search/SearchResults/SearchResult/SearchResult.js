import React from 'react';
import styles from './SearchResult.module.css';
import {BusinessRating} from '../../../BusinessRating/BusinessRating';

export function SearchResult(props) {
    const b = props.business;
    console.log(JSON.stringify(b));
    if (!b) {
        return (<div/>);
    }
    // <div>
    //     <span className={`tag ${styles['business-tag']}`} >Baked Goods 🥧 </span>
    //     <span className={`tag ${styles['business-tag']}`}>Cheese 🧀 </span>
    //     <span className={`tag ${styles['business-tag']}`}>Crafts 🎨</span>
    //     <span className={`tag ${styles['business-tag']}`}>Flowers 🌹</span>
    //     <span className={`tag ${styles['business-tag']}`}>Eggs 🍳</span>
    //     <span className={`tag ${styles['business-tag']}`}>Seafood 🐟</span>
    //     <span className={`tag ${styles['business-tag']}`}>Herbs 🌿</span>
    //     <span className={`tag ${styles['business-tag']}`}>Vegetables 🍅🌽</span>
    //     <span className={`tag ${styles['business-tag']}`}>Honey 🍯</span>
    //     <span className={`tag ${styles['business-tag']}`}>Jams 🧃</span>
    //     <span className={`tag ${styles['business-tag']}`}>Maple 🍁</span>
    //     <span className={`tag ${styles['business-tag']}`}>Meat 🥩</span>
    //     <span className={`tag ${styles['business-tag']}`}>Nursery 🌱</span>
    //     <span className={`tag ${styles['business-tag']}`}>Nuts 🥜</span>
    //     <span className={`tag ${styles['business-tag']}`}>Plants 🌱</span>
    //     <span className={`tag ${styles['business-tag']}`}>Poultry 🍗</span>
    //     <span className={`tag ${styles['business-tag']}`}>Prepared 🥘</span>
    //     <span className={`tag ${styles['business-tag']}`}>Soap 🧼</span>
    //     <span className={`tag ${styles['business-tag']}`}>Trees 🌳</span>
    //     <span className={`tag ${styles['business-tag']}`}>Wine 🍷</span>
    //     <span className={`tag ${styles['business-tag']}`}>Coffee ☕️</span>
    //     <span className={`tag ${styles['business-tag']}`}>Beans 🧆</span>
    //     <span className={`tag ${styles['business-tag']}`}>Fruits 🍉</span>
    //     <span className={`tag ${styles['business-tag']}`}>Grains 🌾</span>
    //     <span className={`tag ${styles['business-tag']}`}>Juice 🧃</span>
    //     <span className={`tag ${styles['business-tag']}`}>Mushrooms 🍄</span>
    //     <span className={`tag ${styles['business-tag']}`}>PetFood 🐶</span>
    //     <span className={`tag ${styles['business-tag']}`}>Tofu 🥟</span>
    //     <span className={`tag ${styles['business-tag']}`}>Wild Harvested 🍇🥦</span>
    //
    // </div>

    // const tags = b.categories.map(category => (<span className={`tag ${styles['business-tag']}`} className={`tag ${styles['business-tag']}`} key={b.id + category.title}>{category.title}</span>));
    // const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);
    const addressLines = b.street;

    return (


        <div className={styles['search-result']}>
            <img src={b.image_url} alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>

                <h2 className="subtitle"> <a href={b.Website}><strong>{b.MarketName} </strong></a></h2>
                <i>{b.sim_pct} <i className="fas fa-percent"></i> Match to your search</i>
                {/*<BusinessRating reviewCount={b.review_count} rating={b.rating}/>*/}
                {/*<p> {tags} </p>*/}
                <div>
                    {b.Bakedgoods?<span className={`tag ${styles['business-tag']}`}>Baked Goods 🥧 </span>:''}
                    {b.Cheese==='Y'?<span className={`tag ${styles['business-tag']}`}>Cheese 🧀 </span>:''}
                    {b.Crafts==='Y'?<span className={`tag ${styles['business-tag']}`}>Crafts 🎨</span>:''}
                    {b.Flowers==='Y'?<span className={`tag ${styles['business-tag']}`}>Flowers 🌹</span>:''}
                    {b.Eggs==='Y'?<span className={`tag ${styles['business-tag']}`}>Eggs 🍳</span>:''}
                    {b.Seafood==='Y'?<span className={`tag ${styles['business-tag']}`}>Seafood 🐟</span>:''}
                    {b.Herbs==='Y'?<span className={`tag ${styles['business-tag']}`}>Herbs 🌿</span>:''}
                    {b.Vegetables==='Y'?<span className={`tag ${styles['business-tag']}`}>Vegetables 🍅🌽</span>:''}
                    {b.Honey==='Y'?<span className={`tag ${styles['business-tag']}`}>Honey 🍯</span>:''}
                    {b.Jams==='Y'?<span className={`tag ${styles['business-tag']}`}>Jams 🧃</span>:''}
                    {b.Maple==='Y'?<span className={`tag ${styles['business-tag']}`}>Maple 🍁</span>:''}
                    {b.Meat==='Y'?<span className={`tag ${styles['business-tag']}`}>Meat 🥩</span>:''}
                    {b.Nursery==='Y'?<span className={`tag ${styles['business-tag']}`}>Nursery 🌱</span>:''}
                    {b.Nuts==='Y'?<span className={`tag ${styles['business-tag']}`}>Nuts 🥜</span>:''}
                    {b.Plants==='Y'?<span className={`tag ${styles['business-tag']}`}>Plants 🌱</span>:''}
                    {b.Poultry==='Y'?<span className={`tag ${styles['business-tag']}`}>Poultry 🍗</span>:''}
                    {b.Prepared==='Y'?<span className={`tag ${styles['business-tag']}`}>Prepared 🥘</span>:''}
                    {b.Soap==='Y'?<span className={`tag ${styles['business-tag']}`}>Soap 🧼</span>:''}
                    {b.Trees==='Y'?<span className={`tag ${styles['business-tag']}`}>Trees 🌳</span>:''}
                    {b.Wine==='Y'?<span className={`tag ${styles['business-tag']}`}>Wine 🍷</span>:''}
                    {b.Coffee==='Y'?<span className={`tag ${styles['business-tag']}`}>Coffee ☕️</span>:''}
                    {b.Beans==='Y'?<span className={`tag ${styles['business-tag']}`}>Beans 🧆</span>:''}
                    {b.Fruits==='Y'?<span className={`tag ${styles['business-tag']}`}>Fruits 🍉</span>:''}
                    {b.Grains==='Y'?<span className={`tag ${styles['business-tag']}`}>Grains 🌾</span>:''}
                    {b.Juice==='Y'?<span className={`tag ${styles['business-tag']}`}>Juice 🧃</span>:''}
                    {b.Mushrooms==='Y'?<span className={`tag ${styles['business-tag']}`}>Mushrooms 🍄</span>:''}
                    {b.PetFood==='Y'?<span className={`tag ${styles['business-tag']}`}>PetFood 🐶</span>:''}
                    {b.Tofu==='Y'?<span className={`tag ${styles['business-tag']}`}>Tofu 🥟</span>:''}
                    {b.WildHarvested==='Y'?<span className={`tag ${styles['business-tag']}`}>Wild Harvested 🍇🥦</span>:''}
                </div>
                <div>
                    {b.Credit?<span className={`tag ${styles['business-tag']}`}>Credit Card </span>:''}
                    {b.WIC==='Y'?<span className={`tag ${styles['business-tag']}`}>WIC  </span>:''}
                    {b.WICcash==='Y'?<span className={`tag ${styles['business-tag']}`}>WICcash </span>:''}
                    {b.SFMNP==='Y'?<span className={`tag ${styles['business-tag']}`}>SFMNP </span>:''}
                    {b.SNAP==='Y'?<span className={`tag ${styles['business-tag']}`}>SNAP </span>:''}
                    {b.Organic==='Y'?<span className={`tag ${styles['business-tag']}`}>Organic </span>:''}

                </div>

            </div>
            <div className={styles['contact-info']}>
                <p>{b.phone}</p>
                {addressLines}
                <p>{b.city} {b.zip}, {b.State}</p>
            </div>


        </div>


    )
}
