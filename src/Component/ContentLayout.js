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
    fetch("https://route.showapi.com/1143-2?page=1&showapi_appid=51102&showapi_test_draft=false&showapi_timestamp=20171130015937&song_type=real-time&showapi_sign=4bf9544ec49e018dffba7f0eb654fcf3")
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
            <img alt="example" width="100%" src={songsItem.showapi_res_body.albumLogo} />
          </div>
          <div className="card-body" >
            <h3>{songsItem.showapi_res_body.songName}</h3>
            <p>{songsItem.showapi_res_body.songName}</p>
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