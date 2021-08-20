import React, { useEffect, useState, memo } from "react";
import { nanoid } from 'nanoid'
import Cell from "./Cell";

const Row = ({data, isHeader = false, isColored = false}) => {
    const [rowData, setRowData] = useState([])

    useEffect(() =>{
        //console.log("Row>>data>>>>", data);
        if(data){
            const _data = [];
            for(const key in data){
                console.log("rowData>>>>",key,  data[key]);
                _data.push({id: nanoid(), title: key, value: data[key]})
            }
            setRowData(_data);
        }
        //setRowData(data);
   },[data])

    return (
        <div className={`grid highlite ${isColored && "colored"}`}>
            {
            rowData?.length &&
                rowData.map((item) => 
                    <Cell key={item.id} data={item}/>)
            }
    
        </div>
    )
}

export default memo(Row)