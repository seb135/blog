import React from 'react';

class HeaderComponent extends React.Component{
  render(){
    return(
      <header>
        <div className='logo'>
          LOGO
        </div>
        <nav>
          <ul>
            <li className='first'><a href="#">Home</a></li>
            <li><a href="#">Escaperooms</a></li>
            <li><a href="#">Reserveren</a></li>
            <li className='last'><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
