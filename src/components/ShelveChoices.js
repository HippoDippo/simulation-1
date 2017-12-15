import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';

class ShelveChoices extends Component {
  render() {
    return (
      <div className="shelf-choices">
        <Link to="">><h1>Shelf A</h1></Link>
        <Link to=""><h1>Shelf B</h1></Link>
        <Link to=""><h1>Shelf C</h1></Link>
        <Link to=""><h1>Shelf D</h1></Link>
      </div>
    )
  }
}

export default ShelveChoices;