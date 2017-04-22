var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className="home-container" style="background-image: url("app/images/pattern.svg");">
        <h1>Enter a City and State</h1>
      </div>
    )
  }
}

module.exports = Home;
      /*<form>
        <label>Enter a City and State</label>
        <input
            placeholder='St. George, Utah'
            type='text'
          />
        <button
          className='button'
          type='submit'>
            Get Weather
        </button>
      </form>*/
