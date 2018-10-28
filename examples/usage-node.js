let console = require('console');
let Smallstache = require('smallstache').default;

// object as a data source
let template = new Smallstache('Hello {{ something }}!');
const obj = {something: 'World'};
console.log(template.fill(obj));

// array as a data source
let title = new Smallstache('{{0}}, {{1}} and {{2}}');
const arr = ['Me', 'Myself', 'I'];
console.log(title.fill(arr));

// string as a data source
let question = new Smallstache('Food with 5 letters: {{0}}...{{4}}');
const str = 'kebab';
console.log(question.fill(str));
