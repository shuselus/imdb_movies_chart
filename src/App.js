import React from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";

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
    fieldName: "Remove",
    //component: <DeleteButton/>
  }
];

const App = ({ data }) => {
  return (
    <div className="app-container">
      <Header />
      <Grid columnDefinitions={columnDefinitions} data={data} />
    </div>
  );
};
export default App;
