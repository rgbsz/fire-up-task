import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

import Header from './components/header'
import Navbar from './components/navbar'

import Main from './screens/main'
import Weather from './screens/weather';

const GlobalStyle = createGlobalStyle`
  .myContainer {
    max-width: 1280px;
    margin: auto;
    padding: 1rem;
    height: 100%;
  }
`

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle/>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/weather' component={Weather}/>
          <Route render={() => <Redirect to='/'/>}/>
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default App;
