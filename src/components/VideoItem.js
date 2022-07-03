import React, { Component } from 'react'
import './VideoList.css'

export default class VideoItem extends Component {

  onVideoSelect = (e) => {
    this.props.onVideoSelect(this.props.video);
  }

  render() {
    return (
      <div className='d-flex align-items-center border-bottom mt-1 mb-1 p-1 cursor-pointer video-item' onClick={this.onVideoSelect}>
        <img src={this.props.video.snippet.thumbnails.medium.url} alt="" />
        <div className="h6 p-2">
          {this.props.video.snippet.title}
        </div>
      </div>
    )
  }
}
