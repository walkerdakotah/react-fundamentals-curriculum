var React = require('react');
var Zipcode = require('./Zipcode');

function Nav () {
  return (
    <div className='navbar'>
      <h1>Clever Title</h1>
      <Zipcode
        direction='row'
        onSubmitZipcode={function(){}}
        onUpdateZipcode={function(){}}
        zipcode={123} />
    </div>
  )
}

module.exports = Nav;
