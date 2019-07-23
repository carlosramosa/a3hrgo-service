'use strict';

module.exports = ({ app, middleware, controller: { login } }) => {

    app.post('/fichar', login);
    app.get('/', function(req, res, next) {
        res.sendFile('./index.html', { title: 'Express' });
    });
    module.exports = app; 
}