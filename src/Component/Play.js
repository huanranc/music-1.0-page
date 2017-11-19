import React, { Component } from 'react';
import Icon from 'antd/lib/icon';
import Avatar from 'antd/lib/avatar';
import Progress from 'antd/lib/progress';
import musicplay from './fly.mp3';
import './Play.css';

const src='./fly.mp3';
const audioId=document.getElementById('audio');

class Play extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPlay: false
    }
    this.handlePlayerClick = this.handlePlayerClick.bind(this);
  }

componentDidMount(){

}

handlePlayerClick() {
  this.setState(prevState=>({
    isPlay:!prevState.isPlay
  }));
  if(!this.state.isPlay) {
    this.audioplay.play();
    }else {
      this.audioplay.pause();
    }

}
  render(){
    console.log(this.audioplay);
    console.log(this.isPlay);
    return(
      <div className="play">
        <audio id="audio" preload="load" src={musicplay}  ref={(audio) => {this.audioplay=audio;}}>
          您的浏览器不支持 audio 与元素。
        </audio>
        <Avatar shape="square" size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <div className="play-control">
            <span><Icon type="fast-backward"  style={{ fontSize: 24, color: '#fff' }}/></span>
            <span  onClick={this.handlePlayerClick} >
                {this.state.isPlay? <Icon  type="pause"  style={{ fontSize: 28, color: '#fff' }} />:<Icon type="caret-right" style={{ fontSize: 28, color: '#fff' }} /> }
            </span>
           <span><Icon type="fast-forward" style={{ fontSize: 24, color: '#fff' }}/></span>
        </div>
        <Progress className="play-progress" percent={0} />
      </div>
    );
  }
}

export default Play;