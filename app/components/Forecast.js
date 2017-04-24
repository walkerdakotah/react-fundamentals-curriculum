const React = require('react');
const Zipcode = require('./Zipcode');

class Forecast extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.children.name}</h1>
      </div>
    )
  }
}

module.exports = Forecast;
