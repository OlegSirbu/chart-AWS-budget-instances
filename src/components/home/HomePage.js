import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render(){
    return (
      <div className="">
        <h1>Plural sight</h1>
        <Link to="about" className="btn btn-primary">
          Learn more
        </Link>
      </div>
    )
  }
}

export default HomePage;
