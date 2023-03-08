import React from 'react';
import styles from './App.module.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { HomePage,SignInPage,RegisterPage, DetailPage } from './pages';



function App() {
  return  <div className={styles.App}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/signIn' component={SignInPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/detail/:tourisRouteId' component={DetailPage}/>
        <Route render={()=>{return <h1>404 Not Found 页面去火星了</h1>}}></Route>
      </Switch>     
    </BrowserRouter>
  </div>
}

export default App;
