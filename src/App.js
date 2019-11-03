import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Header from './components/header'
import { Router, Route } from 'react-router';
import mainPortal from './assets/images/greatSymbolImage.jpg'
import African from './components/African Religions'
import Atheism from './components/Atheism'
import Buddhism from './components/Buddhism'
import Christianity from './components/Christianity'
import Hinduism from './components/Hinduism'
import Islam from './components/Islam'
import Judaism from './components/Judaism'
import NativeAmericanReligion from './components/NativeAmericanReligion'
import Shintoism from './components/Shintoism'
import Sikhism from './components/Sikhism'
import Taoism from './components/Taoism'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <img src={mainPortal} alt="Main Portal" />
      <Router>
        <Route path = {"african"} component = {African}/>
        <Route path = {"atheism"} component = {Atheism} />
        <Route path = {"buddhism"} component = {Buddhism}/>
        <Route path = {"christianity"} component = {Christianity}/>
        <Route path = {"hinduism"} component = {Hinduism}/>
        <Route path = {"islam"} component = {Islam}/>
        <Route path = {"judaism"} component = {Judaism}/>
        <Route path = {"native american"} component = {NativeAmericanReligion}/>
        <Route path = {"shintoism"} component = {Shintoism}/>
        <Route path = {"sikhism"} component = {Sikhism}/>
        <Route path = {"taoism"} component = {Taoism}/>

      </Router>
      
    </div>
  );
}
}

export default App;
