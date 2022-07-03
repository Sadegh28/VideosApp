import React, { Component } from 'react'

export default class VideoDetails extends Component {
  render() {
    if (this.props.video) {
      const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
      return (
        <div>
          <div className='ratio ratio-16x9'>
            <iframe src={videoSrc} title="Youtube Video Player" className=''></iframe>
          </div>
          <div className='w-100 mt-3 border p-3'>
            <h6>this.props.video.snippet.title</h6>
            <p>{this.props.video.snippet.description}</p>
          </div>
        </div>
      )
    }
  }
}
