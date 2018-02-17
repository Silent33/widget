import React, { Component } from 'react';
import Container from './containers/item/Container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
            <Container />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
