import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import music from './music.jpg';
import './ContentLayout.css';


class ContentLayout extends Component {
  constructor(props){
    super(props);
    
  }
  render(){
    const cols = [];
    for (let i = 0; i <12; i++) {
      cols.push(
        <Col key={i.toString()} span={4}>
          <div className="card">
            <div className="card-image">
              <img alt="example" width="100%" src={music} />
            </div>
            <div className="card-body" >
              <h3>张国荣</h3>
              <p>风继续吹，不忍远离</p>
              <p><span>2</span> song</p>
            </div>
          </div>
        </Col>
      );
    }
    return(
      <div >
        <h2>新碟首发</h2>
        <Row className="card-row" gutter={24}>{cols}</Row>
      </div>
    );
  }
}
export default ContentLayout;