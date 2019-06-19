'use strict';

module.exports = ({ app, middleware, controller: { login } }) => {

    app.post('/login/', login);

    module.exports = app;
}