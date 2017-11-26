import React, { Component } from 'react';
import Icon from 'antd/lib/icon';
import Avatar from 'antd/lib/avatar';
import musicplay from './fly.mp3';
import './Play.css';

//const src='./fly.mp3';

class Play extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPlay: false,
      currentTime: 0,
      duration:0
    }
    this.handlePlayerClick = this.handlePlayerClick.bind(this);
    this.timeStart = this.timeStart.bind(this);
    this.controlAudio= this.controlAudio.bind(this);
  }

componentDidMount(){
}

timeStart(time) {
  let durationTime=parseInt(time);
  let minute = parseInt(durationTime/60);
  let second = durationTime%60+'';
  let symbol = ':';
  if(minute == 0){
      minute = '00';
  }else if(minute < 10 ){
      minute = '0'+minute;
  }
  if(second.length == 1){
    second = '0'+second;
  }
  return minute+symbol+second
}

controlAudio(){
  this.setState({
    duration:this.audioplay.duration,
    currentTime:this.audioplay.currentTime
  });
}

handlePlayerClick() {
  this.setState(prevState=>({
    isPlay:!prevState.isPlay,
    //duration:this.audioplay.duration
  }));
  if(!this.state.isPlay) {
    this.audioplay.play();
    }else {
      this.audioplay.pause();
      console.log(this.audioplay.currentTime);
      console.log((parseInt(this.audioplay.currentTime))%100);
    }

}
  render(){
    return(
      <div className="play">
        <audio id="audio" preload="auto" src={musicplay} onTimeUpdate={ this.controlAudio}  ref={(audio) => {this.audioplay=audio;}}>
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
        <span style={{ fontSize: 12, color: '#fff' }}>{this.timeStart(this.state.currentTime)}</span>
        <div className="play-progress">
          <div className="progress-nav" style={{ width:10  }}></div>
        </div>
        <span style={{ fontSize: 12, color: '#fff' }}>{this.timeStart(this.state.duration)}</span>
      </div>
    );
  }
}

export default Play;