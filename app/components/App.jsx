const React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
// var Button = require('reapp-ui').Button;

let App = React.createClass({

  
  render:function() {
    
    
    return (
      
        <div>
          <h1>Heading</h1>
            <RouteHandler/>
        </div>
      
    );
  }

});

module.exports = App;
