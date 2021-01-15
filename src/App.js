import React from 'react'
import './css/style.css'
class App extends React.Component {
  render() {

    return (
      <div className="App">
        <nav>
          <h2 className='logo'><a className='logo-link' href='/#'>Quentin Tarantino</a></h2>
          <ul className='nav-menu'>
            <li><a className="nav-menu__link" href='/#'>Home</a></li>
            <li><a className="nav-menu__link" href='/#'>As Directors</a></li>
            <li><a className="nav-menu__link" href='/#'>As Actors</a></li>
            <li><a className="nav-menu__link" href='/#'>As Producers</a></li>
          </ul>
        </nav >
      </div >
    );

  }

}

export default App;
