import React, { Component } from 'react';
import { Input, Icon, Segment, Form, Button, Divider, Container, Header } from 'semantic-ui-react'
import SplitterLayout from 'react-splitter-layout';
import SplitPane, { Pane } from 'react-split-pane';
import 'react-splitter-layout/lib/index.css';

import CR7 from '../images/futbol/cr7.jpg'
import Messi from '../images/futbol/messi.jpg'
import Bale from '../images/futbol/bale.jpg'
import Neymar from '../images/futbol/neymar.jpg'
 
class Futbol extends Component {

    constructor(){
        super()
        this.state = {
            userName: localStorage.getItem('userName'),
            jugador: false,
            
        };
      }

    componentDidMount() {
        if(!localStorage.getItem('userName')) this.goHome()
    }


    goCategories(){
        this.props.history.push('/categories')
      }
      
    goHome(){
        localStorage.removeItem('userName')
        localStorage.removeItem('categoria')
        localStorage.removeItem('section')
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                {/* Preguntas futbol */}
                {localStorage.getItem('categoria') === 'futbol' && localStorage.getItem('section') === 'Ligas'? 
                <Header>
                <Container>¿Cuál de estos jugadores tiene más media?</Container>
                <Divider inverted />

                <SplitPane split="vertical" minSize={50} defaultSize={100}>
              <div>
                
                <Button 
                  inverted
                  color='green'
                  primary onClick={() => {
                    this.setState({jugador:true})
                  }}
                  disabled={this.state.jugador}
                  >
                <img src={CR7} />
                </Button>
              
              </div>
  
              <div>
              <Button 
                inverted
                color='green'
                primary onClick={() => {
                  this.setState({jugador:true})
                }}
                disabled={this.state.jugador}
              >
                <img src={Messi} />
              </Button>
              </div>
              
            </SplitPane>

            <Divider inverted />
  
            <SplitPane split="vertical" minSize={50} defaultSize={100}>
                 <div>
                 <Button 
                  inverted
                  color='green'
                  primary onClick={() => {
                    this.setState({jugador:true})
                  }}
                  disabled={this.state.jugador}
                >
                <img src={Bale} />
                </Button>
              </div>
  
              <div>
              <Button 
                  inverted
                  color='green'
                  primary onClick={() => {
                    this.setState({jugador:true})
                  }}  
                  disabled={this.state.jugador}
                >
                <img src={Neymar} />
                </Button>
              </div>
            </SplitPane>
            </Header> 
            
              :

              localStorage.getItem('categoria') === 'futbol' && localStorage.getItem('section') === 'Nacionalidades'? 
              <Header>
              <Container>¿Cuál de estos jugadores es de Brasil?</Container>
              <Divider inverted />

              <SplitPane split="vertical" minSize={50} defaultSize={100}>
            <div>
              
              <Button 
                inverted
                color='green'
                primary onClick={() => {
                  this.setState({jugador:true})
                }}
                disabled={this.state.jugador}
                >
              <img src={CR7} />
              </Button>
            
            </div>

            <div>
            <Button 
              inverted
              color='green'
              primary onClick={() => {
                this.setState({jugador:true})
              }}
              disabled={this.state.jugador}
            >
              <img src={Messi} />
            </Button>
            </div>
            
          </SplitPane>

          <Divider inverted />

          <SplitPane split="vertical" minSize={50} defaultSize={100}>
               <div>
               <Button 
                inverted
                color='green'
                primary onClick={() => {
                  this.setState({jugador:true})
                }}
                disabled={this.state.jugador}
              >
              <img src={Bale} />
              </Button>
            </div>

            <div>
            <Button 
                inverted
                color='green'
                primary onClick={() => {
                  this.setState({jugador:true})
                }}  
                disabled={this.state.jugador}
              >
              <img src={Neymar} />
              </Button>
            </div>
          </SplitPane>
          </Header> 
              :

              localStorage.getItem('categoria') === 'futbol' && localStorage.getItem('section') === 'Clubes'? 
              <Header>
              <Container>¿Qué club de estos jugadores participa en la liga Francesa?</Container>
              <Divider inverted />

              <SplitPane split="vertical" minSize={50} defaultSize={100}>
            <div>
              
              <Button 
                inverted
                color='green'
                primary onClick={() => {
                  this.setState({jugador:true})
                }}
                disabled={this.state.jugador}
                >
              <img src={CR7} />
              </Button>
            
            </div>

            <div>
            <Button 
              inverted
              color='green'
              primary onClick={() => {
                this.setState({jugador:true})
              }}
              disabled={this.state.jugador}
            >
              <img src={Messi} />
            </Button>
            </div>
            
          </SplitPane>

          <Divider inverted />

          <SplitPane split="vertical" minSize={50} defaultSize={100}>
               <div>
               <Button 
                inverted
                color='green'
                primary onClick={() => {
                  this.setState({jugador:true})
                }}
                disabled={this.state.jugador}
              >
              <img src={Bale} />
              </Button>
            </div>

            <div>
            <Button 
                inverted
                color='green'
                primary onClick={() => {
                  this.setState({jugador:true})
                }}  
                disabled={this.state.jugador}
              >
              <img src={Neymar} />
              </Button>
            </div>
          </SplitPane>
          </Header> 
              : 

              null
                }
                

            <Divider />

            {this.state.jugador? 
                <Container> 
                  <h1> El 99% de los jugadores ha elegido lo mismo que tú! </h1>
                  <h2> Aquí irían gráficas y cosillas que queramos </h2>
                </Container>
                :
                null  
              }

              {/* Preguntas comida */}
              {localStorage.getItem('categoria') === 'comida' && localStorage.getItem('section') === 'Típicos'? 
              null
              : 
              localStorage.getItem('categoria') === 'comida' && localStorage.getItem('section') === 'Ingredientes'? 
              null
              :
              localStorage.getItem('categoria') === 'comida' && localStorage.getItem('section') === 'Restaurantes'? 
              null
              :
              null
              }

              {/* Preguntas viajes */}
              {localStorage.getItem('viajes') === 'comida' && localStorage.getItem('section') === 'Monumentos'? 
              null
              : 
              localStorage.getItem('viajes') === 'comida' && localStorage.getItem('section') === 'Países'? 
              null
              :
              localStorage.getItem('viajes') === 'comida' && localStorage.getItem('section') === 'Ciudades'? 
              null
              :
              null
              }

            <Divider inverted />

            <Button inverted color={localStorage.getItem('categoria')=== 'futbol'? 'green' 
                    : localStorage.getItem('categoria')=== 'comida'? 'brown' 
                    : localStorage.getItem('categoria')=== 'viajes'? 'blue' : null} 
                    icon='angle double left' 
                    content={"Volver"} 
                    primary onClick={() => {
                      this.goCategories()
                      
                    }} />

            <Divider inverted />
                </header>

                
            </div>
            
        
        );
    }
}
 
export default Futbol;