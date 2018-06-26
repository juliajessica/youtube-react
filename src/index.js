import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_Key = '';

class App extends Component { //function based component
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }
  videoSearch(term){
    YTSearch({key: API_Key, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }//create new object (we name property: videos) & assign it this.state

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
    //debounce takes the term that can only run every 3 seconds

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}
//app starts up & renders an instance of searchBar


ReactDOM.render(<App />, document.querySelector('.container'));
//<App />  - creates an instance of the class
//document.querieSelector('.container') -  take html and render on the DOM (page)
