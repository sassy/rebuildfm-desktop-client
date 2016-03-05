import React from 'react'


export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="pane">
        <webview src={this.props.link}></webview>
      </div>
    );
  }
}
