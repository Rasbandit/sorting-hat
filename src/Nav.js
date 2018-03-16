import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/" >Home</Link>
        <Link to="/gryffindor" >Gryffindor</Link>
        <Link to="/slytherin" >Slytherin</Link>
        <Link to="/hufflepuff" >Hufflepuff</Link>
        <Link to="/ravenclaw" >Ravenclaw</Link>
      </div>
    );
  }
}

export default Nav;