import React, { Component } from 'react'


export default class Spiner extends Component {
  render() {
    return (<>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>

      </div>
      <div className="">{this.props.text}</div>
    </>
    )
  }
}

Spiner.defaultProps = {
  text: 'Loading ...'
}
