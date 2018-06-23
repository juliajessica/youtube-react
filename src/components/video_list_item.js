import React from 'react';

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;




// const VideoListItem = ({video}) => {
//   // feeding in {video} is the same thing as declaring a variable const video = props.video; to get the video from the video_list component
//   return <ul>Video</ul>;
// }
