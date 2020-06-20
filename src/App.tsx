import React from 'react';
import css from './App.module.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar/Navbar';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';

const App = () => {
  return (
    <div className={css.app}>
      <Header />
      <Navbar />
      <LeftSideBar />
      <RightSideBar />
    </div>
  );
}

export default App;
