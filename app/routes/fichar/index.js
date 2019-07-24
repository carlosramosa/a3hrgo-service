'use strict';

module.exports = ({ app, controller: { login } }) => {

    app.post('/fichar', login);

    module.exports = app; 
}