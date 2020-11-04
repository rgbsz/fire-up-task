import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

import Header from './components/header'
import Navbar from './components/navbar'

import Main from './screens/main'
import Weather from './screens/weather';
import weatherContext from './store';
import { INITIAL_REQUEST, INITIAL_WEATHER } from './store/weatherContext.consts';
import { IWeather, IRequest } from './store/weatherContext.types';

const GlobalStyle = createGlobalStyle`
  .myContainer {
    max-width: 1280px;
    margin: auto;
    padding: 1rem;
    height: 100%;
  }
  * {
    font-family: 'Lato', sans-serif!important;
  }
`

const App: React.FC = (): JSX.Element => {
  const [weather, setWeather] = useState<IWeather>(INITIAL_WEATHER)
  const [request, setRequest] = useState<IRequest>(INITIAL_REQUEST)
  return (
    <BrowserRouter>
      <>
        <GlobalStyle/>
        <Header />
        <Navbar />
        <weatherContext.Provider value={{ weather, setWeather, request, setRequest }}>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/weather' component={Weather}/>
            <Route render={() => <Redirect to='/'/>}/>
          </Switch>
        </weatherContext.Provider>
      </>
    </BrowserRouter>
  )
}

export default App;
