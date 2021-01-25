import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AsActorsContainer from './components/AsActorsContainer';
import AsDirectorsContainer from './components/AsDirectorsContainer';
import Home from './components/Home'
import Navbar from './components/Navbar'
import './css/style.css'

class App extends Component {
  render() {

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <Route exact path='/' render={() => <Home title="Welcome To The Quentin Tarantino's World" />} />
          <Route path='/asdirectors/' render={() => <AsDirectorsContainer title="Directed By Quentin Tarantino" />} />
          <Route path='/asactors/' render={() => <AsActorsContainer title="Some Movies Quentin Tarantino Has Appeared" />} />
        </div>
      </BrowserRouter>

    )

  }

}

export default App;
