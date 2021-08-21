import React, { useEffect, useState, useRef, useCallback } from "react";
import { nanoid } from 'nanoid';
import Row from "./Row";

export const contextTable = React.createContext(null);
let isColored = false;

const Grid = ({ columnDefinitions, data }) => {
  const [rowsData, setRowsData] = useState([]);
  const [columnsData, setColumnsData] = useState([]);
  //const [selectedRow, setSelectedRow] = useState(null);
  const tableRef = useRef(null);

  useEffect(() => {
    //set colomns
      setColumnsData(() => columnDefinitions.map(item =>{
        item.id = nanoid();
        return item;
      }));

      //sort by raiting
      const _data = data.sort((a, b) => b.imdbRating - a.imdbRating, 0);

      //set rows
      setRowsData(() => _data.map(item => 
        columnDefinitions.map(({fieldName}) => 
          ({id: nanoid(), fieldName: fieldName, value:item[fieldName] ? item[fieldName] : fieldName})
      ))); 
  },[data, columnDefinitions]);

  
  //highlite - unhighite rows
  const selectRow = useCallback((row=null) =>{
    if(row){
      const selected = [...tableRef.current.getElementsByClassName("selected-row")];
      selected.forEach(item => {
        item.classList.remove('selected-row');
      });
      row.classList.add("selected-row");
    }
  },[data]);

  const deleteRow = useCallback((id) =>{
     setRowsData(()=>{
        return rowsData.filter((item) => 
           item[0].value !== id
        );
     });
  },[rowsData]);

  return (
    <contextTable.Provider value={{selectRow, deleteRow}}>
      <div className="grid-container shadow" >
        <div className="scroll-container" ref={tableRef}>
          <div className="row-grid header-row">
          {
            columnsData?.length &&
                columnsData.map((item) => (
                    <div className="row-grid-item " key={item.id}>
                        <strong>{item.fieldName}</strong>
                    </div>
                  )
                )
          }
          </div>
          {
               rowsData?.length &&
                 rowsData.map((item) => 
                   <Row 
                      key={item[0].value} 
                      rowId={item[0].value}
                      data={item} 
                      isColored={isColored = !isColored}
                   /> 
                )
          }
        </div>
      </div>
    </contextTable.Provider>
  );
};

export default Grid;
