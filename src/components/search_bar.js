import React, { Component } from 'react';

//onChange is a react property
//class based component
class SearchBar extends Component { //creating an object
  constructor(props) {
    super(props);

    this.state = { term: '' }; //create new object/instance (we name property: term) & assign it this.state
  }

  render() { //method - component renders
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

//causes the component to rerender & push new info to the DOM
//{this.state.term} js variable & referencing the value of 'term' -- this displays the new input to the dom
export default SearchBar;
// ReactDOM.render();
