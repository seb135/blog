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
            <li><a href="#">Home</a></li>
            <li><a href="#">Escaperooms</a></li>
            <li><a href="#">Reserveren</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
