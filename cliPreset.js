const _cliProgress = require('cli-progress');
var _colors = require('colors');

var bar = new _cliProgress.Bar({
    barsize: 30,
    format: 'running simulations' +  _colors.blue(' [{bar}]') + ' | {value}/{total}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591'
});

module.exports = {bar}
