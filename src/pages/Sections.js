import React, { Component } from 'react';
import { Input, Icon, Segment, Form, Button, Divider, Container, Header } from 'semantic-ui-react'
import Futbollogo from '../sections-logos/deporte.svg'
import ComidaLogo from '../sections-logos/comida.svg'
import HotLogo from '../sections-logos/calor.svg'
import FlyLogo from '../sections-logos/viajes.svg'


import '../App.css';

import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

import SplitPane, { Pane } from 'react-split-pane';

class Sections extends Component {

  constructor(){
    super()
    this.state = {
        userName: localStorage.getItem('userName'),
        categoria: localStorage.getItem('categoria')
    };
  }

  componentDidMount() {
    if(!localStorage.getItem('userName')) this.goHome()
  }

  goHome(){
    localStorage.removeItem('userName')
    localStorage.removeItem('categoria')
    localStorage.removeItem('section')
    this.props.history.push('/');
}
  goCategories(){
    this.props.history.push('/categories');
  }

  goQuestion(){
    this.props.history.push('/questions')
  }

  


  render() {
    return (
        <div className="App">
        <header className="App-header">

        <div class="foo">
          <span class="letter" data-letter="S">S</span>
          <span class="letter" data-letter="E">E</span>
          <span class="letter" data-letter="C">C</span>
          <span class="letter" data-letter="C">C</span>
          <span class="letter" data-letter="1">1</span>
          <span class="letter" data-letter="O">O</span>
          <span class="letter" data-letter="N">N</span>
          <span class="letter" data-letter="E">E</span>
          <span class="letter" data-letter="S">S</span>
        </div>
          <Divider />
          <Container> Elige una sección {this.state.userName}! </Container>
          <Divider />
          {this.state.categoria === 'futbol'?
          <Header>
                  <Button inverted
                    inverted
                    color = 'green'
                    primary onClick={() => {
                      localStorage.setItem('section', 'Nacionalidades')
                      this.goQuestion();
                    }}
                  >
                  <header className="App-section-futbol">

                    <img src={Futbollogo} className="App-section-logo" alt="logo" />
                    <h1>
                      Nacionalidades
                    </h1>
                  </header>
                  </Button>

                  <Divider />

                  <Button 
                  inverted
                  color = 'green'
                  primary onClick={() => {
                    localStorage.setItem('section', 'Ligas')
                    this.goQuestion();
                  }}
                  >


                  <header className="App-section-futbol">
                    <img src={Futbollogo} className="App-section-logo" alt="logo" />
                    <h1>
                      Ligas    
                    </h1>
                  </header>
                  </Button>

                  <Divider />

                  <Button 
                  inverted
                  color = 'green'
                    primary onClick={() => {
                      localStorage.setItem('section', 'Clubes')
                      this.goQuestion();
                    }}
                  >
                  <header className="App-section-futbol">

                    <img src={Futbollogo} className="App-section-logo" alt="logo" />
                    <h1>
                      Clubes
                    </h1>
                  </header>
                  </Button>
            </Header> : 

          this.state.categoria === 'comida'?
          <Header>
                  <Button inverted
                    inverted
                    color = 'brown'
                    primary onClick={() => {
                      localStorage.setItem('section', 'Típicos')
                      this.goQuestion();
                    }}
                  >
                  <header className="App-section-food">

                    <img src={ComidaLogo} className="App-section-logo" alt="logo" />
                    <h1>
                      Típicos
                    </h1>
                  </header>
                  </Button>

                  <Divider />

                  <Button 
                  inverted
                  color = 'brown'
                  primary onClick={() => {
                    localStorage.setItem('section', 'Ingredientes')
                    this.goQuestion();
                  }}
                  >


                  <header className="App-section-food">
                    <img src={ComidaLogo} className="App-section-logo" alt="logo" />
                    <h1>
                      Ingredientes    
                    </h1>
                  </header>
                  </Button>

                  <Divider />

                  <Button 
                  inverted
                  color = 'brown'
                    primary onClick={() => {
                      localStorage.setItem('section', 'Restaurantes')
                      this.goQuestion();
                    }}
                  >
                  <header className="App-section-food">

                    <img src={ComidaLogo} className="App-section-logo" alt="logo" />
                    <h1>
                      Restaurantes
                    </h1>
                  </header>
                  </Button>
            </Header> : 
              this.state.categoria === 'viajes'?
              <Header>
                      <Button inverted
                        inverted
                        color = 'blue'
                        primary onClick={() => {
                          localStorage.setItem('section', 'Típicos')
                          this.goQuestion();
                        }}
                      >
                      <header className="App-section-fly">
    
                        <img src={FlyLogo} className="App-section-logo" alt="logo" />
                        <h1>
                          Monumentos
                        </h1>
                      </header>
                      </Button>
    
                      <Divider />
    
                      <Button 
                      inverted
                      color = 'blue'
                      primary onClick={() => {
                        localStorage.setItem('section', 'Países')
                        this.goQuestion();
                      }}
                      >
                      <header className="App-section-fly">
                        <img src={FlyLogo} className="App-section-logo" alt="logo" />
                        <h1>
                          Países    
                        </h1>
                      </header>
                      </Button>
    
                      <Divider />
    
                      <Button 
                      inverted
                      color = 'blue'
                        primary onClick={() => {
                          localStorage.setItem('section', 'Ciudades')
                          this.goQuestion();
                        }}
                      >
                      <header className="App-section-fly">
    
                        <img src={FlyLogo} className="App-section-logo" alt="logo" />
                        <h1>
                          Ciudades
                        </h1>
                      </header>
                      </Button>
                </Header>
            : null}

              <Divider/>
              
              <Button inverted color='black' icon='angle double left' content={"Volver"} primary onClick={() => {
                    this.goCategories()
                  }} />
                  <Button inverted color='black' icon='home' content={"Inicio"} primary onClick={() => {
                    this.goHome()
                  }} />
              <Divider/>
            <b>Desarrollado por <a href="mailto:cornerdev@gmail.com">CornerDev </a></b>
        </header>
          Iconos diseñados por <a href="https://www.flaticon.es/autores/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>

          
          
        </div>
        
      );
    }
  
}
export default Sections;
