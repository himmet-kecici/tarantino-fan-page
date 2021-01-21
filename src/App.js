import React from 'react'
import Home from './components/home'
import Navbar from './components/navbar'
import './css/style.css'
class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <Home />
      </div >
    );

  }

}

export default App;
