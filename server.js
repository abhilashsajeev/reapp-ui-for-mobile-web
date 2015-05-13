var express = require('express'),
	path = require('path'),
	// packageJson = require('./package.json'),
	app = express();

require("node-jsx").install();

var port = 3000,
	bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.route('/api/test')
	.get(function(req, res, next) {
		res.send('test');
	});

app.get('*', function (req, res) {
  res.render('index');
});

// app.use(function (req, res, next) {
//   // pass in `req.url` and the router will immediately match
//   var React = require('react');
//   var Router = require('react-router');
//   var routes = require('./app/routes');

//   Router.run(routes, req.url, function (Handler) {
//     var content = React.renderToString(React.createElement(Handler, null));
//     res.render('index', {content: content});
//   });
// });

// require('./app/routes/coreRoutes.js')(app);
// require('./app/routes/apiRoutes.js')(app);

/*app.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});*/

app.listen(port);

console.log('Server is Up and Running at Port : ' + port);