var React = require('react');

class Zipcode extends React.Component {
  render() {
    return (
      <div className='zipcode-container'>
        <input type="text" className="form-control" placeholder="St. George, Utah" value=""/>
        <button type="button" className="btn btn-success" style={{margin: '10px'}}>Get Weather</button>
      </div>
    )
  }
}

module.exports = Zipcode;

