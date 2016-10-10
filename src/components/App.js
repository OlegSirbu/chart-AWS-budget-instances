import React, {PropTypes} from 'react';

class App extends React.Component {
  render(){
    return(
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-3">
            <select className="input-large form-control">
              <option value="">Period</option>
              <option value="">1 day</option>
              <option value="">1 month</option>
              <option value="">3 month</option>
            </select>
          </div>

          <div className="col-md-3">
            <select className="input-large form-control">
              <option value="">Instance type</option>
              <option value="">t2.micro</option>
              <option value="">t3.micro</option>
              <option value="">t1.micro</option>
            </select>
          </div>

          <div className="col-md-3">
            <select className="input-large form-control">
              <option value="">System type</option>
              <option value="">t2.micro</option>
              <option value="">t3.micro</option>
              <option value="">t1.micro</option>
            </select>
          </div>

          <div className="col-md-3">
            <select className="input-large form-control">
              <option value="">Region</option>
              <option value="">t2.micro</option>
              <option value="">t3.micro</option>
              <option value="">t1.micro</option>
            </select>
          </div>

        </div>

        <div className="row">
          <div className="chartMain">

          </div>
        </div>
      </div>
    )
  }

}

App.proTypes = {
  children: PropTypes.object.isRequired
};

export default App;
