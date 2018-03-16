import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Splash from './components/Splash';
import House from './components/House';
import Nav from './Nav';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ravenclaw: ['Megan', 'Murray'],
      hufflepuff: ['Todd', 'Seth'],
      gryffindor: ['Maddi', 'Tim'],
      slytherin: ['Sam', 'Cody'],
    }
  }

  addMember = (name, house) => {
    console.log(this);
    let members = [...this.state[house], name]
    let obj = {};
    obj[house] = members
    this.setState(obj)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/gryffindor" render={
            () => <House
              house={'gryffindor'}
              members={this.state.gryffindor}
              addMember={this.addMember}
            />
          } />
          <Route path="/hufflepuff" render={
            () => <House house={'hufflepuff'} members={this.state.hufflepuff} addMember={this.addMember} />
          } />
          <Route path="/ravenclaw" render={
            () => <House house={'ravenclaw'} members={this.state.ravenclaw} addMember={this.addMember} />
          } />
          <Route path="/slytherin" render={
            () => <House house={'slytherin'} members={this.state.slytherin} addMember={this.addMember} />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
