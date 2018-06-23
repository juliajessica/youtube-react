import React, { Component } from 'react';

// const SearchBar = () => {
//   return <p><input placeholder="search"/></p>;
// };

//onChange is a react property
//class based component
class SearchBar extends Component { //creating an object
  constructor(props) {
    super(props);

    this.state = { term: '' }; //create new object/instance (we name property: term) & assign it this.state
  }

  render() { //method - component renders
    return (
      <div>
        <input
          value={this.state.term} //displays text on dom
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

//causes the component to rerender & push new info to the DOM
//{this.state.term} js variable & referencing the value of 'term' -- this displays the new input to the dom
export default SearchBar;
// ReactDOM.render();
