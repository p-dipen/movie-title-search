import React from "react";
import SearchBar from "./containers/SearchBar";
import MovieTable from "./containers/MovieTable";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  table {
  width: 85%;
  margin:0 auto;
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  th {
    text-align: center;
  }
  }
  .descending:after,
  .ascending:after {
    content: ' ';
    position: absolute;
    right: 12px;
    top:0%;
    border: 8px solid transparent;
  }

  .descending:after {
    top: 10px;
    border-top-color: silver;
  }

  .ascending:after {
    bottom: 15px;
    border-bottom-color: silver;
  }

  .descending,
  .ascending {
    padding-right: 10px;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SearchBar />
      <MovieTable />
    </div>
  );
}

export default App;
