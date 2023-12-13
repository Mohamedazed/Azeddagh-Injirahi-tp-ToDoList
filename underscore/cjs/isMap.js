var _tagTester = require('./_tagTester.js');
var _methodFingerprint = require('./_methodFingerprint.js');
var _stringTagBug = require('./_stringTagBug.js');

var isMap = _stringTagBug.isIE11 ? _methodFingerprint.ie11fingerprint(_methodFingerprint.mapMethods) : _tagTester('Map');

module.exports = isMap;
