import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import './ContentLayout.css';


class ContentLayout extends Component {
  render(){
    const cols = [];
      this.props.products.forEach((product) => {
        cols.push(
          <Col key={product.id} span={4}>
            <div className="card">
              <div className="card-image">
                <img alt="example" width="100%" src={product.img} />
              </div>
              <div className="card-body" >
                <h3>{product.dir}</h3>
                <p>{product.name}</p>
              </div>
            </div>
          </Col>
        );
      });
    return(
      <div >
        <h2>新碟首发</h2>
        <Row className="card-row" gutter={24}>{cols}</Row>
      </div>
    );
  }
}
export default ContentLayout;