import React from 'react'
import { render } from 'react-dom'
import Sidebar from './component/sidebar'

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="window-content">
        <div className="pane-group">
          <Sidebar />
        </div>
      </div>
    );
  }
}

render(
  <Content />,
  document.getElementById('container')
);
