var React = require('react');
const App = require('./components/App.jsx');
const Router = require('react-router');
const Route = Router.Route
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute =  Router.DefaultRoute;
const Category = require('./components/Category.jsx');
const Flyer = require('./components/Flyer.jsx');
const CategoryDetail = require('./components/CategoryDetail.jsx');

var NotFound = React.createClass({
  render: function () {
    return <h2>Not found</h2>;
  }
});

module.exports = (
	<Route handler={App}>
		<DefaultRoute handler={Category}/>
		<Route name = "detail" path="detail" handler={CategoryDetail}/>
		<Route name="flyer" path="flyer" handler={Flyer}/>
		<NotFoundRoute handler={NotFound} />
	</Route>
);
