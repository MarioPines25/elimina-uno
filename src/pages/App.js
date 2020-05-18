//Main app component.

import React, { Component } from 'react';
import '../App.css';
import Layout from '../components/Layout.js';
import Main from '../components/Main';

export class App extends Component {
  render(){
    return (
      <Layout>
        <Main />
      </Layout>
    )
  }
}
export default App;