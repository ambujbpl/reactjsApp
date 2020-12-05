import React from 'react';

const VideoDetail = ({ video, isInitial }) => {
  var videoSrc = ''
  isInitial ? videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1` : videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=0`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} name="youtube video embed" allow="autoplay; encrypted-media"  />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
