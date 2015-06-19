var React = require('react');
var Header = require('./header.jsx')

var App = React.createClass({
  render: function() { return (
    <div>
      <Header/>
      <h1>yo!</h1>
    </div>
  )}
})

React.render(<App/>, document.body)
