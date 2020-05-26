import React, { useState } from 'react';
import { Layout, Menu, Button, Divider, Avatar } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [drawerStt, setDrawerStt] = useState(true);
  const [collapsedW, setcollapsedW] = useState(80);

  const handleDrawerState = () => {
    if (!drawerStt) {
      setDrawerStt(true);
    }
    else {
      setDrawerStt(false);
    }
  };



  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={drawerStt} onCollapse={handleDrawerState} breakpoint="sm"
          collapsedWidth={collapsedW}
          onBreakpoint={broken => {
            if (broken)
              setcollapsedW(0)
            else
              setcollapsedW(80)
          }}>
          <div className="flex-container">
            <Avatar size="large" className="central-ava" icon={<UserOutlined />} src="https://randomuser.me/api/portraits/men/78.jpg"/>
          </div>
          <div className="flex-container">
            <p>MR.P</p>
          </div>
          <Divider plain />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, backgroundColor: "#fafcfc" }}>
            <Button icon={drawerStt ? <ArrowRightOutlined /> : <ArrowLeftOutlined />} onClick={handleDrawerState} />
          </Header>
          <Content>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Tao Design ©2018 Created by Tao</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
