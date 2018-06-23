import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_Key = 'AIzaSyBJpvk8Qkq7yX4-6yTWAzIbraKw9PW6pXo';

class App extends Component { //function based component
  constructor(props) {
    super(props);

    this.state = { videos: [] }; //create new object (we name property: videos) & assign it this.state

    YTSearch({key: API_Key, term: 'surfboards'}, (videos) => {
      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//app starts up & renders an instance of searchBar


ReactDOM.render(<App />, document.querySelector('.container'));
//<App />  - creates an instance of the class
//document.querieSelector('.container') -  take html and render on the DOM (page)
