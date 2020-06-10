import React, {useState} from 'react';
import styles from './SearchBar.module.css';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


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
    const [credit, setCredit] = useState(!!props.credit );
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

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location,products,credit);
        }
        console.log(term, location,products,credit);
        e.preventDefault();
    }

    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <form onSubmit={submit} className={classes.formControl}>

            <Button color="primary">Hello World</Button>

            <div className="field has-addons">
                <div className = "control">
                <div className="select is-multiple">
                    <select  multiple size="8"  onChange={(e) => setProducts(e.target.value)}>
                        <option value="BakedGoods">Baked Goods</option>
                        <option value="Cheese">Cheese</option>
                        <option value="Crafts">Crafts</option>
                        <option value="Flowers">Flowers</option>
                        <option value="Eggs">Eggs</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Herbs">Herbs</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Honey">Honey</option>
                        <option value="Jams">Jams</option>
                        <option value="Maple">Maple</option>
                        <option value="Meat">Meat</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Nuts">Nuts</option>
                        <option value="Plants">Plants</option>
                        <option value="Poultry">Poultry</option>
                        <option value="Prepared">Prepared</option>
                        <option value="Soap">Soap</option>
                        <option value="Trees">Trees</option>
                        <option value="Wine">Wine</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Beans">Beans</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Grains">Grains</option>
                        <option value="Juice">Juice</option>
                        <option value="Mushrooms">Mushrooms</option>
                        <option value="PetFood">PetFood</option>
                        <option value="Tofu">Tofu</option>
                        <option value="WildHarvested">Wild Harvested</option>


                    </select>
                </div>
                </div>
                <p className="control">
                    <button className={`button is-static ${sizeClass}`}>Search</button>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`}
                           onChange={(e) => setTerm(e.target.value)}
                           type="text"
                           value={term}
                           placeholder="burgers, barbers, spas, handymen"
                    />
                </p>

                <div className="field is-vertical">

                    {/*<div className="field-label">*/}
                    {/*    <label className="label">Checkbox</label>*/}
                    {/*</div>*/}
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <label className="checkbox"> <input type="checkbox" checked={credit} onChange={(e) => setCredit(e.target.checked?1:0)}/>
                                    Accepts credit card? {credit}</label>
                            </div>
                        </div>
                    </div>

                    {/*<div className="field-label">*/}
                    {/*    <label className="label">Checkbox</label>*/}
                    {/*</div>*/}
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <label className="checkbox"> <input type="checkbox" name={'WIC'}/>
                                    WIC? </label>
                            </div>
                        </div>
                    </div>

                    {/*<div className="field-label">*/}
                    {/*    <label className="label">Checkbox</label>*/}
                    {/*</div>*/}
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <label className="checkbox"> <input type="checkbox" name={'WICcash'}/>
                                    WICcash? </label>
                            </div>
                        </div>
                    </div>

                    {/*<div className="field-label">*/}
                    {/*    <label className="label">Checkbox</label>*/}
                    {/*</div>*/}
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <label className="checkbox"> <input type="checkbox" name={'SFMNP'}/>
                                    SFMNP? </label>
                            </div>
                        </div>
                    </div>

                    {/*<div className="field-label">*/}
                    {/*    <label className="label">Checkbox</label>*/}
                    {/*</div>*/}
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <label className="checkbox"> <input type="checkbox" name={'SNAP'}/>
                                    SNAP? </label>
                            </div>
                        </div>
                    </div>

                    {/*<div className="field-label">*/}
                    {/*    <label className="label">Checkbox</label>*/}
                    {/*</div>*/}
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <label className="checkbox"> <input type="checkbox" name={'organic'}/>
                                    Organic? </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>


                <div className="control">
                    <div className={`button is-static ${sizeClass}`}>NEAR</div>
                </div>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`}
                           onChange={(e) => setLocation(e.target.value)}
                           type="text"
                           value={location}
                           placeholder="Where"/>
                </p>
                <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
                    <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-search"></i></span>
                </div>
            </div>
        </form>
    );
}