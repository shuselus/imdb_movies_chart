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
    fieldName: "Trailer"
    // component: Trailer
  }
];

// "Title":"Braveheart",
// "Year":"1995",
// "Rated":"R",
// "Released":"24 May 1995",
// "Runtime":"2 h 57 min",
// "Genre":"Action, Biography, Drama, History, War",
// "Director":"Mel Gibson",
// "Writer":"Randall Wallace",
// "Actors":"Mel Gibson, Sophie Marceau, Patrick McGoohan, Angus Macfadyen",
// "Plot":"When his secret bride is executed for assaulting an English soldier who tried to rape her, a commoner begins a revolt and leads Scottish warriors against the cruel English tyrant who rules Scotland with an iron fist.",
// "Poster":"http://ia.media-imdb.com/images/M/MV5BNjA4ODYxMDU3Nl5BMl5BanBnXkFtZTcwMzkzMTk3OA@@._V1_SX300.jpg",
// "imdbRating":"8.4",
// "imdbVotes":"483,156",
// "imdbID":"tt0112573",
// "Type":"movie",
// "Response":"True",
// "Trailer":{
//   "url":"https://www.youtube.com/watch?v=vbnGDeq40hI"
// }

const App = ({ data }) => {
  //const [gridData, setGridData] = useState([]);
  //const [columnDefinitions, setColumnDefinitions] = useState([]);
  useEffect(() => {
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
  }, [data]);

  return (
    <div>
      <Grid columnDefinitions={columnDefinitions} data={data} />
    </div>
  );
};
export default App;
