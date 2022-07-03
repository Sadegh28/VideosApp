import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Spiner from './Spiner';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
export default class App extends Component {

  state = { searching: false, videos: [], selectedVideo: null };


  componentDidMount() {
    this.onSearchSubmit('lion');
  }

  onSearchSubmit = async (term) => {
    this.setState({ searching: true });
    const response = await Youtube.get('/search', {
      params: { q: term }
    });

    this.setState({ searching: false, videos: response.data.items, selectedVideo: response.data.items[0] });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div>
        <div className="container border mt-3">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="container mt-4">
          {this.state.searching ? <Spiner /> :
            <div className='row'>
              <div className="col-8">
                <VideoDetails video={this.state.selectedVideo} />
              </div>
              <div className="col-4">
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
              </div>

            </div>}

        </div>



      </div>
    )
  }
}
