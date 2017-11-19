import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Navbar from './Navbar';
import MenuLayout from './MenuLayout';
import ContentLayout from './ContentLayout';
import Play from './Play';
import music from './music.jpg';
import music1 from './music1.jpg';
import './MainLayout.css';

const { Header, Sider, Content } = Layout;
const assets =[
  {
    name:'张国荣',dir:'风继续吹，不忍远离',num:'2',img: music,id:1001
  },
  {
    name:'孙燕姿',dir:'122435465',num:'6',img: music1,id:1002
  },
  {
    name:'姚峰',dir:'122435465',num:'6',img: music,id:1003
  },
  {
    name:'西瓜jun',dir:'啦啊啦啦',num:'6',img: music1,id:1004
  },
  {
    name:'张国荣',dir:'风继续吹，不忍远离',num:'2',img: music,id:1005
  },
  {
    name:'孙燕姿',dir:'122435465',num:'6',img: music1,id:1006
  },
  {
    name:'姚峰',dir:'122435465',num:'6',img: music,id:1007
  },
  {
    name:'西瓜jun',dir:'啦啊啦啦',num:'6',img: music1,id:1008
  },
  {
    name:'张国荣',dir:'风继续吹，不忍远离',num:'2',img: music,id:1009
  },
  {
    name:'孙燕姿',dir:'122435465',num:'6',img: music1,id:1010
  },
  {
    name:'姚峰',dir:'122435465',num:'6',img: music,id:1011
  },
  {
    name:'西瓜jun',dir:'啦啊啦啦',num:'6',img: music1,id:1012
  },
  {
    name:'姚峰',dir:'122435465',num:'6',img: music,id:1013
  },
  {
    name:'西瓜jun',dir:'啦啊啦啦',num:'6',img: music1,id:1014
  },
  
]

export default class MainLayout extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <Navbar />
        </Header>
        <Layout>
          <Sider>
           <MenuLayout />
          </Sider>
          <Layout>
            <Content style={{
              padding: 30,
              margin: 0,
              backgroundColor: 'white'
            }}>
             <ContentLayout products={assets}/>
            </Content>
          </Layout>
          <Play />
        </Layout>
      </Layout>
    );
  }
}
