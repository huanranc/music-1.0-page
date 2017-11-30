import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import './ContentLayout.css';


class ContentLayout extends Component {

  constructor() {
    super();
    this.state ={
      songs:''
    };
  }

  componentDidMount() {
    var myFetchOptions ={
      method:'GET'
    };
    fetch("http://route.showapi.com/1143-7?showapi_appid=51102&typeId=102&page=1&showapi_sign=cc9fdfc7e1824302b9b645a92f0646eb")
    .then(response=>response.json())
    .then(json=>this.setState({songs:json}));
  };
  render(){
    const cols = [];
    const songs=this.state;
    const songsList = songs.length
    ?
    songs.map((songsItem,index)=>
      <Col key={index} span={4}>
        <div className="card">
          <div className="card-image">
            <img alt="example" width="100%" src={songsItem.albumLogo} />
          </div>
          <div className="card-body" >
            <h3>{songsItem.songName}</h3>
            <p>{songsItem.songName}</p>
          </div>
        </div>
      </Col>
  )
  :
  '没有加载到任何音乐';
    return(
      <div >
        <h2>新碟首发</h2>
        <Row className="card-row" gutter={24}>{songsList}</Row>
      </div>
    );
  }
}
export default ContentLayout;