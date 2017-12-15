import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShelveChoices extends Component {
  render() {
    return (
      // JSX and React Router (Link ) used below.
      <div className="shelf-choices">
        <Link to="/a">><h1>Shelf A</h1></Link>
        <Link to="/b"><h1>Shelf B</h1></Link>
        <Link to="/b"><h1>Shelf C</h1></Link>
        <Link to="/d"><h1>Shelf D</h1></Link>
      </div>
    )
  }
}

export default ShelveChoices;