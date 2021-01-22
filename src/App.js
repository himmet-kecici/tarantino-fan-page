import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AsActors from './components/AsActors';
import AsDirectors from './components/AsDirectors';
import AsProducers from './components/AsProducers';
import Home from './components/Home'
import Navbar from './components/Navbar'
import './css/style.css'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' render={() => <Home title="Welcome To The Quentin Tarantino's World" />} />
          <Route path='/asdirectors/' render={() => <AsDirectors />} />
          <Route path='/asactors/' render={() => <AsActors />} />
          <Route path='/asproducers/' render={() => <AsProducers />} />


        </div>
      </BrowserRouter>

    )

  }

}

export default App;
