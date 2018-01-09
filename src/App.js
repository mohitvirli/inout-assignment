import React, { Component } from 'react';
import './App.css';
import TagContainer from './components/tags';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
          <div className="app-container">
              <div className="app-width-adjust">
                  <h1 className="app-header">What are your skills?</h1>
                  <div className="app-subtext">
                      Lorem ipsum dolor sit amet, te cum tantas appellantur voluptatibus, ne vituperata posidonium quo, sonet vivendum invenire vix et. Per bonorum labores scaevola eu. Nam eu nullam temporibus. Malis copiosae in pri. Doctus vivendo te pro. Sumo rebum recteque has cu, virtute quaerendum neglegentur ut sea.
                  </div>

                  <TagContainer/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
