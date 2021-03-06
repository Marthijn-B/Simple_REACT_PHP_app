import React, { Component } from 'react';
import 'whatwg-fetch';
import RaisedButtonExampleSimple from './icon.js';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './appbar.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
            MainText: "REACT Front-end with PHP backend",
    };
    this.getPHP = this.getPHP.bind(this);
  }
  getPHP () {
    var formdata = new FormData();
    formdata.append('content', 'message here');

    fetch(`http://localhost:80/Demo_react/api/demo.php`, {
      method: 'POST',
      body: formdata,
    }).then(res=>res.json())
    .then(response => {
      console.log('Response:')
      console.log(response);
      this.setState ({
        MainText: response.message,
      });
    })
    }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <AppBarExampleIcon />
        <p className="mainText">{this.state.MainText}</p>
        <br />
        <RaisedButtonExampleSimple />
        <br />
        <button
          onClick={this.getPHP}
        >
        Click me
        </button>
        <br />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
