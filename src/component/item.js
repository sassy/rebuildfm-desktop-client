import React from 'react'

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    this.props.onSelectItem({link:this.props.link, url:this.props.url});
  }

  render() {
    return (
      <li className='list-group-item' onClick={this.handleClick.bind(this)} >
        <strong>{this.props.title}</strong>
        <p>{this.props.subtitle}</p>
      </li>
    );
  }
}
