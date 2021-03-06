import React from 'react'
import {contextTable} from './Grid';

const Trailer = ({url}) => {
    const contextData = React.useContext(contextTable);

    const unhighlite = (e) =>{
       e.stopPropagation();
       contextData.selectRow();
    }

    return (
        <div className="w-trailer-btn" onClick={unhighlite}>
            <a href={url}  target="_blank" rel="noreferrer">Watch Trailer</a>
        </div>
    )
}

export default Trailer
