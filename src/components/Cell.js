import React, {useState, useEffect, memo} from 'react';
import Trailer from "./Trailer";

const Cell = ({data}) => {
    const [value, setValue] = useState(""); 
    useEffect(() => {
        
        if(data && data.title !== "Trailer"){
           // console.log("Cell")
            setValue(data.value)
        }
    },[data])
    return (
        <div className="grid-item">
            {
              value ?
              <span>{value}</span>
              :
              <Trailer url={data.value.url}/>
            }
           
        </div>
    )
}

export default memo(Cell)
