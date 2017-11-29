import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Navbar from './Navbar';
import MenuLayout from './MenuLayout';
import ContentLayout from './ContentLayout';
import Play from './Play';
import './MainLayout.css';

const { Header, Sider, Content } = Layout;

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
             <ContentLayout/>
            </Content>
          </Layout>
          <Play />
        </Layout>
      </Layout>
    );
  }
}
