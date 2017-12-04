import React, { Component } from 'react';
import './ContentLayout.css';


class ContentLayout extends Component {

  /*constructor() {
    super();
    this.state ={
      songs:''
    //};
    }*/

  /*componentDidMount() {
   // var myFetchOptions ={
    //  method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10",myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({songs:json}));
  };*/
  render(){
    let cols=null;
    cols=this.props.musicItem.map((musicItem) => {
       return <li className="musicItem" key={musicItem.id} src={musicItem.file}>
          <div className="card">
            <div className="card-image">
              <img alt="example" width="100%" src={musicItem.cover} />
            </div>
            <div className="card-body" >
              <h3>{musicItem.title}</h3>
              <p>{musicItem.artist}</p>
            </div>
          </div>
        </li>
    });
    return(
      <div className="content-layout">
        <h2>新碟首发</h2>
        <ul className="card-row">{cols}</ul>
      </div>
    );
  }
}
export default ContentLayout;