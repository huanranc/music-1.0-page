import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Navbar from './Navbar';
import MenuLayout from './MenuLayout';
import ContentLayout from './ContentLayout';
import Play from './Play';
import './MainLayout.css';
import {musicList} from './txt';

const { Header, Sider, Content } = Layout;

export default class MainLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      musicItem:musicList,
      musicIndex:musicList[0]
    }
  }
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
             <ContentLayout musicItem={this.state.musicItem}/>
            </Content>
          </Layout>
          <Play musicIndex={this.state.musicIndex}/>
        </Layout>
      </Layout>
    );
  }
}
