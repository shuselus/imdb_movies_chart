import React, { useEffect, useState, useRef, memo } from "react";
import Cell from "./Cell";
import { contextTable } from './Grid';

const Row = ({rowId, data, isHeader = false, isColored = false}) => {
    const [rowData, setRowData] = useState([...data]); 
    const rowRef = useRef(null);
    const contextData = React.useContext(contextTable);

    useEffect(() =>{
         console.log("rowData>>>", rowData);
   },[rowData]);

    
    return (
        <div className={`row-grid ${isColored ? "colored" : ""}`} 
            ref={rowRef}
            onClick={()=> contextData.selectRow(rowRef.current)}>
            {
                rowData?.length &&
                    rowData.map((item) => 
                        <Cell key={item.id} data={item.fieldName === "Remove" ? {...item, rowId: rowId} : item}/>)
            }
        </div>
    )
}

export default Row