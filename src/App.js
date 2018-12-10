import React, { Component } from 'react';
import Navigation from './Components/navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import Grid from './Components/grid';
import Home from './Components/home';
import Footer from './Components/footer';

class App extends Component {
  render() {
      return(
          <BrowserRouter>
              <div className="App">
                  <Navigation/>
                  <Route exact path='/' component={Home}/>
                  <Route path='/:key' component={Grid}/>
		          <Footer/>
              </div>

          </BrowserRouter>
      )
  }
}

export default App;
