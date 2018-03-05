import React from 'react';

class HeaderComponent extends React.Component{
  render(){
    return(
      <header>
        <div classname='Logo'>
          LOGO
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Escaperooms</li>
            <li>Reserveren</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
