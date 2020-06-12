import React from 'react';
import { render } from 'react-dom';


const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

var myHTML = '<iframe class="embedly-embed" src="../data_exploration_05_21_20.html" width="900" height="600" scrolling="yes" frameborder="0" allowfullscreen></iframe>';

export const Map = () => (
    <div style={styles}>
        {/*<div className={`button center  ${styles['search-button']}`}>*/}
        {/*    Hold Command or Control key to select products. Select options to find nearby farmer's markets.*/}
        {/*</div>*/}
        <div dangerouslySetInnerHTML={ {__html: myHTML}}/>
    </div>
);

render(<Map />, document.getElementById('root'));
