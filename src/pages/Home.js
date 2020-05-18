import React, { Component } from 'react';
import { Button, Segment, Form, Divider } from 'semantic-ui-react'
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {

  constructor(){
    super()
    this.state = {
      userName: null
    };
  }


  goCategories(){
    this.props.history.push('/categories')
  }


  render() {
    return (

      
      <div className="App">
        <header className="App-header">
          <Divider horizontal/>
        <div class="foo">
          <span class="letter" data-letter="E">E</span>
          <span class="letter" data-letter="L">L</span>
          <span class="letter" data-letter="1">1</span>
          <span class="letter" data-letter="M">M</span>
          <span class="letter" data-letter="1">1</span>
          <span class="letter" data-letter="N">N</span>
          <span class="letter" data-letter="A">A</span>
          <Divider horizontal/>
          <span class="letter" data-letter="U">U</span>
          <span class="letter" data-letter="N">N</span>
          <span class="letter" data-letter="O">O</span>
        </div>
        <Divider horizontal/>
        <img src={logo} className="App-logo" alt="logo" />
          <Segment placeholder basic>
                <Form>
                  <Form.Input icon='user' iconPosition='left' label={'Usuario'} placeholder={"Usuario"} onChange={event => this.setState({ userName: event.target.value })} />                  
                  <Button disabled={this.state.userName === null || this.state.userName === ''? true : false} inverted color='black' icon='angle double right' floated='right' content={"Empezar"} primary onClick={() => {
                    this.goCategories()
                    localStorage.setItem('userName', this.state.userName)
                  }} />
                  <Form.Field>
                  </Form.Field>
                </Form>
              </Segment>    
              <b>Desarrollado por <a href="mailto:cornerdev@gmail.com">CornerDev </a></b>
        </header>
      </div>
    );
  }
}
export default Home;
