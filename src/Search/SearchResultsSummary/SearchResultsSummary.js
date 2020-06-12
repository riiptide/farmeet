import React from 'react';
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary(props) {
    let resultStats = null;
    if (props.amountResults && props.shownResults) {
        resultStats = <p>Showing 1-{props.shownResults} out of {props.amountResults} results</p>
    }
    return (
        <div className={styles.container}>

            <div className={styles['search-summary']}>
                {/*<h1 className='subtitle'><strong>{props.term}</strong> {props.location} {props.products} {props.Credit}*/}
                {/*{props.WIC} {props.WICcash} {props.SFMNP} {props.SNAP} {props.Organic}</h1>*/}




                {resultStats}
            </div>
            <div >

                <div >
                    <span className={styles['white']}> You searched for Markets with  </span>
                    {props.products.includes('BakedGoods')?<span className={`tag ${styles['business-tag']} subtitle`}>Baked Goods 🥧 </span>:''}
                    {props.products.includes('Cheese')?<span className={`tag ${styles['business-tag']}`}>Cheese 🧀 </span>:''}
                    {props.products.includes('Crafts')?<span className={`tag ${styles['business-tag']}`}>Crafts 🎨</span>:''}
                    {props.products.includes('Flowers')?<span className={`tag ${styles['business-tag']}`}>Flowers 🌹</span>:''}
                    {props.products.includes('Eggs')?<span className={`tag ${styles['business-tag']}`}>Eggs 🍳</span>:''}
                    {props.products.includes('Seafood')?<span className={`tag ${styles['business-tag']}`}>Seafood 🐟</span>:''}
                    {props.products.includes('Herbs')?<span className={`tag ${styles['business-tag']}`}>Herbs 🌿</span>:''}
                    {props.products.includes('Vegetables')?<span className={`tag ${styles['business-tag']}`}>Vegetables 🍅🌽</span>:''}
                    {props.products.includes('Honey')?<span className={`tag ${styles['business-tag']}`}>Honey 🍯</span>:''}
                    {props.products.includes('Jams')?<span className={`tag ${styles['business-tag']}`}>Jams 🧃</span>:''}
                    {props.products.includes('Maple')?<span className={`tag ${styles['business-tag']}`}>Maple 🍁</span>:''}
                    {props.products.includes('Meat')?<span className={`tag ${styles['business-tag']}`}>Meat 🥩</span>:''}
                    {props.products.includes('Nursery')?<span className={`tag ${styles['business-tag']}`}>Nursery 🌱</span>:''}
                    {props.products.includes('Nuts')?<span className={`tag ${styles['business-tag']}`}>Nuts 🥜</span>:''}
                    {props.products.includes('Plants')?<span className={`tag ${styles['business-tag']}`}>Plants 🌱</span>:''}
                    {props.products.includes('Poultry')?<span className={`tag ${styles['business-tag']}`}>Poultry 🍗</span>:''}
                    {props.products.includes('Prepared')?<span className={`tag ${styles['business-tag']}`}>Prepared 🥘</span>:''}
                    {props.products.includes('Soap')?<span className={`tag ${styles['business-tag']}`}>Soap 🧼</span>:''}
                    {props.products.includes('Trees')?<span className={`tag ${styles['business-tag']}`}>Trees 🌳</span>:''}
                    {props.products.includes('Wine')?<span className={`tag ${styles['business-tag']}`}>Wine 🍷</span>:''}
                    {props.products.includes('Coffee')?<span className={`tag ${styles['business-tag']}`}>Coffee ☕️</span>:''}
                    {props.products.includes('Beans')?<span className={`tag ${styles['business-tag']}`}>Beans 🧆</span>:''}
                    {props.products.includes('Fruits')?<span className={`tag ${styles['business-tag']}`}>Fruits 🍉</span>:''}
                    {props.products.includes('Grains')?<span className={`tag ${styles['business-tag']}`}>Grains 🌾</span>:''}
                    {props.products.includes('Juice')?<span className={`tag ${styles['business-tag']}`}>Juice 🧃</span>:''}
                    {props.products.includes('Mushrooms')?<span className={`tag ${styles['business-tag']}`}>Mushrooms 🍄</span>:''}
                    {props.products.includes('PetFood')?<span className={`tag ${styles['business-tag']}`}>PetFood 🐶</span>:''}
                    {props.products.includes('Tofu')?<span className={`tag ${styles['business-tag']}`}>Tofu 🥟</span>:''}
                    {props.products.includes('WildHarvested')?<span className={`tag ${styles['business-tag']}`}>Wild Harvested 🍇🥦</span>:''}



                    {props.Credit>0?<span className={`tag ${styles['business-tag']}`}>Credit Card </span>:''}{props.Credit>0}
                    {props.WIC>0?<span className={`tag ${styles['business-tag']}`}>WIC  </span>:''}
                    {props.WICcash>0?<span className={`tag ${styles['business-tag']}`}>WICcash </span>:''}
                    {props.SFMNP>0?<span className={`tag ${styles['business-tag']}`}>SFMNP </span>:''}
                    {props.SNAP>0?<span className={`tag ${styles['business-tag']}`}>SNAP </span>:''}
                    {props.Organic>0?<span className={`tag ${styles['business-tag']}`}>Organic </span>:''}

                </div>

            </div>
        </div>
    );
}
