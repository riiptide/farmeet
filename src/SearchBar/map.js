import React from 'react';
import htmlContent from 'src/data_exploration_05_21_20.html';
export default function map() {
    return (
        <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
    );
}