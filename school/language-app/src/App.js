import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, NavLink, Redirect, Switch } from 'react-router-dom';
import Header from './assets/components/Header';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';
import CardsTable from './assets/components/CardsTable';
import CardsCaroussel from './assets/components/CardsCaroussel';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Routes>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/cards_storage" component={CardsTable} />
          <Route exact path="/cards_caroussel" component={CardsCaroussel} />
        </Routes>
        <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
