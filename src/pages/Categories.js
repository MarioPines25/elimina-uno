import React, { Component } from 'react';
import { Button, Divider, Container } from 'semantic-ui-react'
import Futbollogo from '../sections-logos/deporte.svg'
import ComidaLogo from '../sections-logos/comida.svg'
import HotLogo from '../sections-logos/calor.svg'
import FlyLogo from '../sections-logos/viajes.svg'


import '../App.css';

class Categories extends Component {

  constructor(){
    super()
    this.state = {
        userName: localStorage.getItem('userName'),
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

  goCategorie(){
    this.props.history.push('/sections');
  }
  goQuestion(){
    this.props.history.push('/question');
  }

  


  render() {
    return (
        <div className="App">
        <header className="App-header">

        <div class="foo">
          <span class="letter" data-letter="C">C</span>
          <span class="letter" data-letter="A">A</span>
          <span class="letter" data-letter="T">T</span>
          <span class="letter" data-letter="E">E</span>
          <span class="letter" data-letter="G">G</span>
          <span class="letter" data-letter="O">O</span>
          <span class="letter" data-letter="R">R</span>
          <span class="letter" data-letter="1">1</span>
          <span class="letter" data-letter="A">A</span>
          <span class="letter" data-letter="S">S</span>
        </div>
          
          <Divider />
          <Container> Elige una categoría {this.state.userName}! </Container>
          <Divider />
          <Button 
              inverted
              color = 'brown'
              primary onClick={() => {

                localStorage.setItem('categoria', 'comida')
                this.goCategorie()
              }}
              >
                <header className="App-section-food">
                
                  <img src={ComidaLogo} className="App-section-logo" alt="logo" />
                  <h1>
                    Comida
                  </h1>
                </header>
          </Button>

          <Divider />
              <Button 
              inverted
              color = 'green'
              primary onClick={() => {

                localStorage.setItem('categoria', 'futbol')
                this.goCategorie()
              }}
              >
                
                
                <header className="App-section-futbol">
                  <img src={Futbollogo} className="App-section-logo" alt="logo" />
                  <h1>
                    Futbol    
                  </h1>
                </header>
              </Button>

              <Divider />

              <Button 
              inverted
              color = 'blue'
              primary onClick={() => {

                localStorage.setItem('categoria', 'viajes')
                this.goCategorie()
              }}
              >
                <header className="App-section-fly">
                
                  <img src={FlyLogo} className="App-section-logo" alt="logo" />
                  
                  <h1>
                    Viajes
                  </h1>
                </header>
              </Button>
              
              <Divider/>
              
              <Button inverted color='black' icon='angle double left' content={"Volver"} primary onClick={() => {
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
export default Categories;
