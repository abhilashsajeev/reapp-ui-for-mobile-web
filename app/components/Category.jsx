const React = require('react');
const Link = require('react-router').Link;
const AppStore = require('../stores/AppStore');
const UnderScore = require("underscore");


var Categories = React.createClass({
  
 
  render:function() {
    return (
      
        <div>
          <h1> Categories </h1>
          <Link to = 'detail'>goto Detail</Link>
        </div>
      
    );
  }
});

module.exports = Categories;
