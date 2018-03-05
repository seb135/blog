import React, { Component } from 'react';
import './assets/css/default.min.css';

//components
import HeaderComponent from './components/header/header.js';
import FooterComponent from './components/footer/footer.js';
import HomepageComponent from './components/pages/homepage.js';
import EscaperoomsComponent from './components/pages/escaperooms.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />

        <HomepageComponent />

        <FooterComponent />
      </div>
    );
  }
}

export default App;
