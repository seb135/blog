import React, { Component } from 'react';
import './assets/css/default.min.css';

//components
import HeaderComponent from './assets/components/header/header.js'
import FooterComponent from './assets/components/footer/footer.js'
import HomepageComponent from './assets/components/pages/homepage.js'

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
