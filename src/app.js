import React from 'react'
import { render } from 'react-dom'
import Sidebar from './component/sidebar'
import MainContent from './component/maincontent'

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {link:"http://rebuild.fm/132/"};
  }

  selectItem(link) {
    console.log(this);
    this.setState({link:link});
  }

  render() {
    return(
      <div className="window-content">
        <div className="pane-group">
          <Sidebar onSelectItem={this.selectItem.bind(this)} />
          <MainContent link={this.state.link} />
        </div>
      </div>
    );
  }
}

render(
  <Content />,
  document.getElementById('container')
);
