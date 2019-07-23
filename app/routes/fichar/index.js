'use strict';

module.exports = ({ app, middleware, controller: { login } }) => {

    app.post('/fichar', login);

    module.exports = app;
}