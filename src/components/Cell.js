import React,{ memo } from 'react';
import Trailer from "./Trailer";
import DeleteButton from "./DeleteButton";

const Cell = ({data}) => {
    const getTxtAligmentClass = () => data.fieldName === "Title" ? "jstfy-l" : "";

    //console.log("Cell", data);
    
    const displayMatched = () => {
        if(data.fieldName === "Trailer"){
            return <Trailer url={data.value.url}/>
        }else  if(data.fieldName === "Remove"){
            return <DeleteButton rowId={data.rowId} />
        }else if(typeof data.value === "string"){
            return <span>{data.value}</span>
        }  
        return null;
    }

    return (
        <div className={`row-grid-item cell-container ${getTxtAligmentClass()}`}>
            {
              displayMatched()
            }
        </div>
    )
}

export default memo(Cell)