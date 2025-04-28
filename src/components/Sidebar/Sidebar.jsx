import React, {useState} from 'react';
import "./style.scss";
import {Link, useLocation } from "react-router-dom";
import {
    FaComments,
    FaCog,
    FaGraduationCap,
    FaHome,
    FaBookOpen,
    FaUserCircle
} from "react-icons/fa";
import { IoNotificationsOutline  } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';

const {Header, Sider, Content} = Layout;
const Sidebar = ({title, children}) => {

    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const selectedKey = (() => {
        if (location.pathname === "/") return "1";
        if (location.pathname === "/courses") return "2";
        if (location.pathname === "/chats") return "3";
        if (location.pathname === "/grades") return "4";
        if (location.pathname === "/settings") return "5";
        return ""; // Fallback
    })();
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Layout className="sidebar">
            <Sider trigger={null} collapsible collapsed={collapsed}>

                <h1 className="logo">Academyis</h1>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    items={[
                        {
                            key: '1',
                            icon: <FaHome/>,
                            label: <Link to="/">Dashboard</Link>,
                        },
                        {
                            key: '2',
                            icon: <FaBookOpen/>,
                            label: <Link to="/courses">Courses</Link>,
                        },
                        {
                            key: '3',
                            icon: <FaComments/>,
                            label: 'Chats',
                        },
                        {
                            key: '4',
                            icon: <FaGraduationCap/>,
                            label: 'Grades',
                        },
                        {
                            key: '5',
                            icon: <FaCog/>,
                            label: 'Settings',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer, display: 'flex', alignItems: 'center'}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className="navSidebar">
                        <h1>{title}</h1>
                        <div style={{display:"flex", alignItems: 'center', gap:"50px"}}>
                            <div className="navSidebar_avatar">
                                <div className="navSidebar_d-flex_iconsSilader">
                                    <IoNotificationsOutline className="icons"/>
                                </div>
                                <div className="navSidebar_d-flex_iconsSilader"><FaUserCircle className="iconsAvatar" /></div>
                            </div>
                            <div className="navSidebar_d-flex">
                                <h1 className="avatar">Calendar</h1>
                                <div className="navSidebar_d-flex_iconsSilader"><CiCalendarDate className="icons" /></div>
                            </div>
                        </div>

                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Sidebar;