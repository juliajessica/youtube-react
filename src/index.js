import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_Key = 'AIzaSyBJpvk8Qkq7yX4-6yTWAzIbraKw9PW6pXo';

class App extends Component { //function based component
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_Key, term: 'surfboards'}, (videos) => {
      this.setState({ videos: videos });
    });
  } //create new object (we name property: videos) & assign it this.state

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//app starts up & renders an instance of searchBar


ReactDOM.render(<App />, document.querySelector('.container'));
//<App />  - creates an instance of the class
//document.querieSelector('.container') -  take html and render on the DOM (page)
