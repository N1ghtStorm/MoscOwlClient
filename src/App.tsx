import React from 'react';
import css from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import Page from './Components/Page/Page';

const App = () => {
    return (
      <BrowserRouter>
      <div className={css.app}>    
        <Page />
      </div>
      </BrowserRouter>
    );
}

export default App;
