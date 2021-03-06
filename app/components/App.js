const React = require('react');
const Zipcode = require('./Zipcode');

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='navbar'>
          <h1>Clever Title</h1>
          <Zipcode
            direction='row'
            onSubmitZipcode={function(){}}
            zipcode={123} />
        </div>
        <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1 className='header'>Enter a City and State</h1>
          <Zipcode
            direction='column'
            onSubmitZipcode={function(){}}
            zipcode={123} />
        </div>
      </div>
    )
  }
}

module.exports = App;
