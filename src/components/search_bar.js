import React, { Component } from 'react';

// const SearchBar = () => {
//   return <p><input placeholder="search"/></p>;
// };

//onChange is a react property

class SearchBar extends Component { //creating an object
  render() { //method
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event){
    // console.log(event.target.value);
  }
}


export default SearchBar;
// ReactDOM.render();
