import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaComments, FaCog, FaGraduationCap, FaHome, FaBookOpen, FaUserCircle,
} from 'react-icons/fa';
import { TbLogout } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';
import { CiCalendarDate } from 'react-icons/ci';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import './style.scss';

const { Header, Sider, Content } = Layout;

const Sidebar = ({ title, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const logout = () => {
    sessionStorage.removeItem('authToken');
    navigate('/login');
  };

  const selectedKey = (() => {
    switch (location.pathname) {
      case '/': return '1';
      case '/courses': return '2';
      case '/chats': return '3';
      case '/grades': return '4';
      case '/settings': return '5';
      default: return '';
    }
  })();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="sidebar">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" aria-label="App Logo">Academyis</div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={[
            {
              key: '1',
              icon: <FaHome />,
              label: <Link to="/">Dashboard</Link>,
            },
            {
              key: '2',
              icon: <FaBookOpen />,
              label: <Link to="/courses">Courses</Link>,
            },
            {
              key: '3',
              icon: <FaComments />,
              label: 'Chats',
            },
            {
              key: '4',
              icon: <FaGraduationCap />,
              label: 'Grades',
            },
            {
              key: '5',
              icon: <FaCog />,
              label: <Link to="/settings">Settings</Link>,
            },
            {
              key: 'logout',
              icon: <TbLogout />,
              label: 'Logout',
              onClick: logout,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="sidebar__header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle sidebar"
            className="sidebar__toggle"
          />
          <div className="sidebar__nav">
            <h1>{title}</h1>
            <div className="sidebar__right">
              <div className="sidebar__icon-wrapper" aria-label="Notifications">
                <IoNotificationsOutline className="sidebar__icon" />
              </div>
              <Link to="/login" className="sidebar__icon-wrapper" aria-label="User Profile">
                <FaUserCircle className="sidebar__icon" />
              </Link>
              <div className="sidebar__calendar">
                <h1 className="sidebar__calendar-title">Calendar</h1>
                <div className='sidebar__icon-wrapper'>
                <CiCalendarDate className="sidebar__icon" />
                </div>
              </div>
            </div>
          </div>
        </Header>
        <Content
          className="sidebar__content"
          style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
