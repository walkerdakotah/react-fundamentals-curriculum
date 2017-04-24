const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');

class Zipcode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: ''
    };
    this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
    this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);

  }
  handleSubmitZipcode () {
    api.getCurrentWeather(this.state.zipcode)
      .then(function (res) {
        console.log(res)
      })
  }
  handleUpdateZipcode (event) {
    let zip = event.target.value;
    this.setState(function () {
      return {
        zipcode: zip
      }
    })
  }
  render() {
    return (
      <div className='zipcode-container'>
        <input
          className="form-control"
          onChange={this.handleUpdateZipcode}
          placeholder="St. George, Utah"
          type="text"
          value={this.state.zipcode} />
        <button
          className="btn btn-success"
          type="button"
          style={{margin: '10px'}}
          onClick={this.handleSubmitZipcode}>
            Get Weather
        </button>
      </div>
    )
  }
}

module.exports = Zipcode;

