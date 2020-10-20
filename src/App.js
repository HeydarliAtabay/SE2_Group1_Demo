import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import HomepageHeader from './FrontEnd/Components/HomePage_Contents/HomePage_Header';
import HomepageContents from './FrontEnd/Components/HomePage_Contents/HomePage_Contents';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <HomepageHeader/>
      </header>
      <HomepageContents/>
    </div>
    </BrowserRouter>
  );
}

export default App;
