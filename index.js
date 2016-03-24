var appRoot = require('app-root-path');
var Loader = function () {

};
Loader.require = function (module) {
    return require(appRoot + '/modules/' + process.platform + '/' + module);
};


module.exports = Loader;