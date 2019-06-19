'use strict';

/**
 * @function                generateResponse
 * @description             this function generate a response to reply
 * @param   {Function}      reply           express reply function
 * @param   {*}             responnse       data to send
 * @returns {Object}        returns a standard response object
 */
const generateResponse = reply =>
    response =>
        reply.send({
            response
        });


/**
 * @function                handleError
 * @description             this function generates an error response object
 * @param   {Function}      reply           express reply function
 * @param   {Error}         error           error to returns
 * @returns {Object}        returns a standard error response object
 */
const handleError = reply =>
    error =>
        reply.send({
            ok: false
            , data: !hasPayload(error) ? getErrorInfo(error) : getErrorInfo(error.output.payload)
        });



module.exports = {
    generateResponse
};
