import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/molecules/card/Card';
import CoverPhoto from './assets/cover_image/2.png';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Card 
       title="Beyond Entreprenurship"
       author="Jim Collins & Bill Lazier"
       image={CoverPhoto}
       readingTime="13 minute read"
       progress={55}
      />
    </div>
  );
}

export default App;
