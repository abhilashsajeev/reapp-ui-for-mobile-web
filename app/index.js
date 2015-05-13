var Router = require('react-router');
var React = require('react');
var routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function(Root) {
  React.render(<Root/>, document.getElementById('main'));
});
