import React from 'react';
import css from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import HeaderNavBar from './Components/Navbar/HeaderNavBar';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import Page from './Components/Page';

const App = () => {
    return (
      <BrowserRouter>
      <div className={css.app}>
        <HeaderNavBar /> 
        <Page />
      </div>
      </BrowserRouter>
    );
}

export default App;
