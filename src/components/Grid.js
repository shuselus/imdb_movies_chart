import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Row from "./Row";

let isColored = false;

const Grid = ({ columnDefinitions, data }) => {
  const [rowsData, setRowsData] = useState([]);
  const [columnsData, setColumnsData] = useState([]);
  
  useEffect(() => {
      setColumnsData(() => columnDefinitions.map(item =>{
        item.id = nanoid();
        return item;
      }));
      // const _data = data.map(item => 
      //   columnDefinitions.map(({fieldName}) => (
      //   {[fieldName]: item[fieldName]}
      // )));

      // console.log("_data>>>", _data);
      setRowsData(()=>{
          data.map(item => 
            columnDefinitions.map(({fieldName}) => (
            {[fieldName]: item[fieldName]}
        )));
      })
    
  },[columnDefinitions, data])

 // functionuseEffect(() => {
   // if (data?.length) {
      //const _data = [];
      //const dataSet = new Set();
      //const tmp_data = [...data];
      //   data.forEach((item) => {
      //    //const _item = Object.entries(item);
      //     const rows = []
      //     for(let i in item) {
      //       rows.push({id: nanoid(), title:i, value:item[i]});
      //     }
      //     _data.push(rows)
      //  });
      //console.log("_data>>>>", _data);
      //setRowsData(_data);
    //}
  //}, [data]);


  return (
    <div className="grid-container">
      <div className="scroll-container">
        <div className="grid">
        {
          columnsData?.length &&
              columnsData.map((item) => (
                  <div className="grid-item" key={item.id}>
                    <strong>{item.fieldName}</strong>
                  </div>
                )
              )
        }
        </div>
        {
            rowsData?.length &&
              rowsData.map((item) => 
                  <Row key={item["imdbID"]} data={item} isColored={isColored = !isColored}/> 
              )
                    
        }
      </div>
    </div>
  );
};

export default Grid;

// function* entries(obj) {
//   for (let key in obj) yield [key, obj[key]];
// }

//function convertObjArray(obj) {///
//const arr = [];
//arr.push(obj);
// return Object.entries(obj);
//}
