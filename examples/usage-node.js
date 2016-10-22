var Smallstache = require("smallstache");

var template = new Smallstache('Hello {{ something }}!');
var obj = {something: 'World'};
console.log(template.fill(obj));

var title = new Smallstache('{{0}}, {{1}} and {{2}}');
var arr = ['Me', 'Myself', 'I'];
console.log(title.fill(arr));

var question = new Smallstache('Food with 5 letters: {{0}}...{{4}}');
var str = 'kebab';
console.log(question.fill(str));
