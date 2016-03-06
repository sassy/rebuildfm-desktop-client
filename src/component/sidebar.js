import React from 'react'
import $ from 'jquery'
import parser from 'xml2json'
import Item from './item'


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items:[]};
  }

  handleSelectItem(item) {
    this.props.onSelectItem(item);
  }

  loadData() {
    $.ajax({
      url: 'http://feeds.rebuild.fm/rebuildfm',
      dataType: 'text',
      type: 'GET',
      success: function(data) {
        const rss = JSON.parse(parser.toJson(data)).rss;
        const items = rss.channel.item;
        let datas = [];
        items.forEach((elem, idx) => {
          let item = {
            title : elem.title.replace(/&#40;/g, '(').replace(/&#41;/g, ')'),
            subtitle: elem['itunes:subtitle'],
            url : elem.enclosure.url,
            link: elem.link
          };
          datas.push(item);
        });
        this.setState({items:datas});
      }.bind(this),
      error: function(xhr, state, err) {
        console.log(err);
      }
    })
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    var items = this.state.items.map((item) => {
      return (
        <Item title={item.title} subtitle={item.subtitle} link={item.link} url={item.url}
            onSelectItem={this.handleSelectItem.bind(this)} />
      );
    });
    return(
      <div className="pane pane-sm sidebar">
        <ul className="list-group">
          {items}
        </ul>
      </div>
    );
  }
}
