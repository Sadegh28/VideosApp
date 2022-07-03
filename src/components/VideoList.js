import React, { Component } from 'react'
import VideoItem from './VideoItem';

export default class VideoList extends Component {

  videoList() {
    return this.props.videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect} />
    });
  }
  render() {
    return (
      <div className='video-list'>
        {this.videoList()}
      </div>
    )
  }
}
