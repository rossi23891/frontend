import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, NavLink, Redirect, Switch } from 'react-router-dom';
import Header from './assets/components/Header';
import CardsTable from './assets/components/CardsTable';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Layout>
        <Header></Header>
        <Content>
          <CardsTable></CardsTable>
        </Content>
        {/* <Routes>
            <Route exact path="/" component={Content} />
            <Route exact path="/home" component={Content} />
            <Route exact path="/cards_storage" component={CardsTable} />
            <Route exact path="/cards_caroussel" component={CardsCaroussel} />
          </Routes> */}
      </Layout>
      {/* </Router> */}
    </div>
  );
}

export default App;
