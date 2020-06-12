import React, {useState} from 'react';
import styles from './SearchBar.module.css';

import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');
    const [products, setProducts] = useState(props.products || '');
    const [Credit, setCredit] = useState(!!props.Credit);
    const [WIC, setWIC] = useState(!!props.WIC);
    const [WICcash, setWICcash] = useState(!!props.WICcash);
    const [SFMNP, setSFMNP] = useState(!!props.SFMNP);
    const [SNAP, setSNAP] = useState(!!props.SNAP);
    const [Organic, setOrganic] = useState(!!props.Organic);
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setProducts(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChangeProducts = event => {

        var select = event.target;
        var selected = [...select.selectedOptions]
            .map(option => option.value)
            .toString();
        console.log(selected);


        setProducts(selected);
    };

    function submit(e) {
        if (typeof props.search === 'function') {
            props.search(term, location, products, Credit, WIC, WICcash, SFMNP, SNAP, Organic);
        }
        console.log(term, location, products, Credit, WIC, WICcash, SFMNP, SNAP, Organic);
        e.preventDefault();
    }

    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <div className="tile is-ancestor">
            <form onSubmit={submit}>

                <div className={`button center ${sizeClass} ${styles['search-button']}`}>
                    Select products and options to find nearby farmer's markets
                </div>

                <div className="tile is-parent">

                    <div className="field has-addons tile  is-child box is-6">
                        <div className="control">
                            <div className="select is-multiple">
                                <select multiple size="5" onChange={handleChangeProducts}>
                                    <option value="BakedGoods">Baked Goods 🥧</option>
                                    <option value="Cheese">Cheese 🧀</option>
                                    <option value="Crafts">Crafts 🎨</option>
                                    <option value="Flowers">Flowers 🌹</option>
                                    <option value="Eggs">Eggs 🍳</option>
                                    <option value="Seafood">Seafood 🐟</option>
                                    <option value="Herbs">Herbs 🌿</option>
                                    <option value="Vegetables">Vegetables 🍅🌽</option>
                                    <option value="Honey">Honey 🍯</option>
                                    <option value="Jams">Jams 🧃</option>
                                    <option value="Maple">Maple 🍁</option>
                                    <option value="Meat">Meat 🥩</option>
                                    <option value="Nursery">Nursery 🌱</option>
                                    <option value="Nuts">Nuts 🥜</option>
                                    <option value="Plants">Plants 🌱</option>
                                    <option value="Poultry">Poultry 🍗</option>
                                    <option value="Prepared">Prepared 🥘</option>
                                    <option value="Soap">Soap 🧼</option>
                                    <option value="Trees">Trees 🌳</option>
                                    <option value="Wine">Wine 🍷</option>
                                    <option value="Coffee">Coffee ☕️</option>
                                    <option value="Beans">Beans 🧆</option>
                                    <option value="Fruits">Fruits 🍉</option>
                                    <option value="Grains">Grains 🌾</option>
                                    <option value="Juice">Juice 🧃</option>
                                    <option value="Mushrooms">Mushrooms 🍄</option>
                                    <option value="PetFood">PetFood 🐶</option>
                                    <option value="Tofu">Tofu 🥟</option>
                                    <option value="WildHarvested">Wild Harvested 🍇🥦</option>


                                </select>
                            </div>
                        </div>
                        {/*<p className="control">*/}
                        {/*    <button className={`button is-static ${sizeClass}`}>Search</button>*/}
                        {/*</p>*/}
                        <p className="control">
                            <input className={`input ${sizeClass} ${styles['input-control']}`}
                                   onChange={(e) => setTerm(e.target.value)}
                                   type="hidden"
                                   value='pie'

                            />
                        </p>
                    </div>

                    <div className="tile is-child box is-6">
                        <div className="field is-horizontal">

                            {/*<div className="field-label">*/}
                            {/*    <label className="label">Checkbox</label>*/}
                            {/*</div>*/}
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <label className="checkbox"> <input type="checkbox" checked={Credit}
                                                                            onChange={(e) => setCredit(e.target.checked)}/>
                                            Accepts Credit card? {Credit}</label>
                                    </div>
                                    <div>
                                        <label className="checkbox"> <input type="checkbox" checked={WIC}
                                                                            onChange={(e) => setWIC(e.target.checked ? 1 : 0)}/>
                                            WIC? {WIC} </label>
                                    </div>
                                    <div>
                                        <label className="checkbox"> <input type="checkbox" checked={WICcash}
                                                                            onChange={(e) => setWICcash(e.target.checked ? 1 : 0)}/>
                                            WICcash? {WICcash} </label>
                                    </div>
                                    <div>
                                        <label className="checkbox"> <input type="checkbox" checked={SFMNP}
                                                                            onChange={(e) => setSFMNP(e.target.checked ? 1 : 0)}/>
                                            SFMNP? {SFMNP} </label>
                                    </div>
                                    <div>
                                        <label className="checkbox"> <input type="checkbox" checked={SNAP}
                                                                            onChange={(e) => setSNAP(e.target.checked ? 1 : 0)}/>
                                            SNAP? {SNAP}</label>
                                    </div>
                                    <div>
                                        <label className="checkbox"> <input type="checkbox" checked={Organic}
                                                                            onChange={(e) => setOrganic(e.target.checked ? 1 : 0)}/>
                                            Organic? {Organic}</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>


                    {/*<div className="control">*/}
                    {/*    <div className={`button is-static ${sizeClass}`}>NEAR ME</div>*/}
                    {/*</div>*/}
                    <p className="control">
                        <input className={`input ${sizeClass} ${styles['input-control']}`}
                               onChange={(e) => setLocation(e.target.value)}
                               type="hidden"
                               value={location}
                               placeholder="Where"/>
                    </p>
                    <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
                        <span className={`icon is-small ${styles['search-icon']}`}><i
                            className="fas fa-search"></i> </span>&nbsp;&nbsp;Near Me
                    </div>
                </div>
            </form>
        </div>
    );
}
