import React, { useMemo, useRef, memo } from "react";
import Cell from "./Cell";
import { contextTable } from './Grid';

const Row = ({rowId, data, isHeader = false, isColored = false}) => {
    const rowRef = useRef(null);
    const contextData = React.useContext(contextTable);

    // console.log("Row>>>", data);
    
   const memoCell = useMemo(() => 
        data.map((item) => 
        <Cell key={item.id} data={item.fieldName === "Remove" ? {...item, rowId: rowId} : item}/>)
   ,[data, rowId])
    
    return (
        <div className={`row-grid ${isColored ? "colored" : ""}`} 
            ref={rowRef}
            onClick={()=> contextData.selectRow(rowRef.current)}>
            {
              memoCell
            }
        </div>
    )
}

export default memo(Row)