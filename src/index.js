import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';

const API_Key = 'AIzaSyCTgqSR1BCEsyyF-ElfNBY37VgcKwfwV-Q';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
//<App />  - creates an instance of the class
//document.querieSelector('.container') -  take html and render on the DOM (page)
