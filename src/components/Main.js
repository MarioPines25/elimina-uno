//Routes handling
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {  } from 'semantic-ui-react'
import Home from '../pages/Home.js';
import Categories from '../pages/Categories.js';
import Sections from '../pages/Sections.js'
import Questions from '../pages/Questions.js';

import { CSSTransition, TransitionGroup } from "react-transition-group";

const Main = () => (
  <main>
  <BrowserRouter>   
    <TransitionGroup className="container">
      <CSSTransition
        appear={true}
        timeout={{ enter: 400, exit: 200 }}
        classNames="fade"
      >
        <div className="inner">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/categories' component={Categories} />
              <Route path='/sections' component={Sections} />
              <Route path='/questions' component={Questions}/> 
          </Switch>
        </div>
      
      </CSSTransition>
    </TransitionGroup>
    </BrowserRouter>
  </main>
)

export default Main;
