import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import './siderbar.css';
const SubMenu = Menu.SubMenu;

class MenuLayout extends Component {
  render(){
    return(
      <div className='menu-sider'  style={{ width: 200  }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>新碟上新</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>歌手列表</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="inbox" />
          <span>主页</span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>个人中心</span></span>}>
          <Menu.Item key="5">收藏</Menu.Item>
          <Menu.Item key="6">本地</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
    );
  }
}

export default MenuLayout;