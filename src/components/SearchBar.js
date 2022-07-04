import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' };

  inputChange = (e) => {
    this.setState({ term: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className='container p-2 pb-3 rounded mt-3'>
        <form onSubmit={this.onFormSubmit} >
          <label className="h6" >Search Videos</label>
          <input type="text" value={this.state.term} onChange={this.inputChange} className='w-100 rounded p-1' />
        </form>
      </div>
    )
  }
}
