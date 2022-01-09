import { Menu, Row, Col } from 'antd';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { HomeOutlined, CommentOutlined, SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../styles/header.css';

function Header() {

    return (
        <div className="header">
            <Router>
                <Row justify="end">
                    <Col className='col'>
                        <Menu className="menu" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item className="menuItem" key="1" icon={<HomeOutlined />} >
                                <span>Home</span>
                                <NavLink to='/' activeClassName="activeLink" className="link"></NavLink>
                            </Menu.Item>
                            <Menu.Item className="menuItem" key="2" icon={<CommentOutlined />}>
                                <span>Table</span>
                                <NavLink to='/table' activeClassName="activeLink" className="link">
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item className="menuItem" key="3" icon={<SearchOutlined />}>
                                <span>Words</span>
                                <NavLink to='/words' activeClassName="activeLink" className="link">
                                </NavLink>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Router>
        </div>
    )
}

export default Header;