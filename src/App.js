import React, { useEffect, useState } from "react";
import Grid from "./components/Grid";


const columnDefinitions = [
  {
    title: "id",
    fieldName: "imdbID"
  },
  {
    title: "title",
    fieldName: "Title"
  },
  {
    title: "rating",
    fieldName: "imdbRating"
  },
  {
    title: "trailer",
    fieldName: "Trailer",
    //component: <Trailer/>
  },
   {
     title: "remove",
     fieldName: "Remove"
   }
];


const App = ({ data }) => {
  
  //useEffect(() => {
    // console.log("entire data:", data);
    // const _columnDefinitions = Object.keys(data[0]).map((item) => {
    //   return {
    //     title: item.toLowerCase(),
    //     fieldName: item
    //   };
    // });
    // setColumnDefinitions(_columnDefinitions);
    // console.log("_columnDefinitions>>>", _columnDefinitions);

    //setGridData()
  //}, [data]);

  return (
    <div className="app-container">
      <Grid columnDefinitions={columnDefinitions} data={data} />
    </div>
  );
};
export default App;
