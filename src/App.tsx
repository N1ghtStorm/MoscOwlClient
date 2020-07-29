import React from 'react';
import css from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar/Navbar';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import Page from './Components/Page';

class App extends React.Component  {
  render() {
    return (
      <BrowserRouter>
      <div className={css.app}>
        <Header /> 
                       
        <Page />
      </div>
      </BrowserRouter>
    );

    }
  
}

export default App;
