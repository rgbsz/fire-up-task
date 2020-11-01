import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/header'
import Navbar from './components/navbar'

import Main from './screens/main'
import Weather from './screens/weather';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <>
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
