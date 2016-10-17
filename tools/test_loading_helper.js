/*
    Converts native module export to CommonJS export for tests.
*/

var fs = require('fs');

var sourceFile = './src/Smallstache.js';
var testedFile = './spec/src/Smallstache.js';

var nativeExport = 'export { Smallstache as default };';
var nodeExport = 'module.exports = Smallstache;';

fs.readFile(sourceFile, 'utf-8', function(err, source) {
    source = source.replace(nativeExport, nodeExport);

    fs.writeFile(testedFile, source);
});
