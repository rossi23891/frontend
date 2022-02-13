import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import EditableTable from './assets/components/EditableTable';
import CardsCaroussel from './assets/components/CardsCaroussel';
import NoMatch from './assets/components/NoMatch';
import { Menu, Row, Col } from 'antd';
import { HomeOutlined, CommentOutlined } from '@ant-design/icons';
import { createBrowserHistory } from 'history';
import { WordsContextProvider } from './assets/components/WordsContext'

function App() {
  return (
    <WordsContextProvider>
      <div className="App">
        <Router history={createBrowserHistory()}>
          <Layout>
            <div className='header'>
              <Row justify="end">
                <Col className="customCol">
                  <Menu className="menu" mode="horizontal" defaultSelectedKeys={['1']} style={{ backgroundColor: 'rgb(8, 110, 114)' }}>
                    <Menu.Item className="menuItem" key="1" icon={<HomeOutlined />} style={{ color: 'rgb(255, 254, 254)' }}>
                      <Link to='/' style={{ color: 'rgb(255, 254, 254)' }}> Home </Link>
                    </Menu.Item>
                    <Menu.Item className="menuItem" key="2" icon={<CommentOutlined />} style={{ color: 'rgb(255, 254, 254)' }}>
                      <Link to='/game' style={{ color: 'rgb(255, 254, 254)' }}> Words Game </Link>
                    </Menu.Item>
                  </Menu>
                </Col>
              </Row>
            </div>
          </Layout>
          <Routes>
            <Route exact path="/game" element={<CardsCaroussel />} />
            <Route exact path="/" element={<EditableTable />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </div>
    </WordsContextProvider>
  );
}

export default App;
