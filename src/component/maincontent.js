import React from 'react'


export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="pane">
        <div>
          <audio className="player" src={this.props.url} controls></audio>
        </div>
        <webview src={this.props.link}></webview>
      </div>
    );
  }
}
