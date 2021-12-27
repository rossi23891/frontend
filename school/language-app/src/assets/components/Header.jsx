import { Menu } from 'antd';
import { HomeOutlined, CommentOutlined, SearchOutlined } from '@ant-design/icons';
import '../styles/header.css';

function Header() {

    return (
        <div className="header">
            <Menu className="menu" mode="inline" defaultOpenKeys={['1']} defaultSelectedKeys={['1']}>
                <Menu.Item className="menuItem" key="home" icon={<HomeOutlined />}> Home</Menu.Item>
                <Menu.Item className="menuItem" key="table" icon={<CommentOutlined />}> Cards Storage</Menu.Item>
                <Menu.Item className="menuItem" key="caroussel" icon={<SearchOutlined />}> Explore Single Words</Menu.Item>
            </Menu>
        </div>
    )
}

export default Header;