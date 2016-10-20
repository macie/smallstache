# Smallstache
[![Build Status](https://travis-ci.org/macie/smallstache.svg?branch=master)](https://travis-ci.org/macie/smallstache)
[![Test Coverage](https://codeclimate.com/github/macie/smallstache/badges/coverage.svg)](https://codeclimate.com/github/macie/smallstache/coverage)
[![Code Climate](https://codeclimate.com/github/macie/smallstache/badges/gpa.svg)](https://codeclimate.com/github/macie/smallstache)

A lightweight, logic-less JS template engine similar to Mustache/Handlebars. And look mummy, it has only 0.5kB minimized!

## Features
 - Object-oriented approach
 - Very small footprint
 - No dependencies (only good old VanillaJS)
 - Fast and reliable (100% test coverage)
 - Easly debuggable (leaves original tag if can't find data)

## Usage
Typical usage:
```js
  var template = new Smallstache('Hello {{ something }}!');
  template.fill({something: 'World'});
  // > 'Hello World!'
```
You can also use an array as a data source:
```js
  var title = new Smallstache('{{0}}, {{1}} and {{2}}');
  title.fill(['Me', 'Myself', 'I']);
  // > 'Me, Myself and I'
```

Or even a string!
```js
var question = new Smallstache('Food with 5 letters: {{0}}...{{4}}');
  question.fill('kebab');
  // > 'Food with 5 letters: k...b'
```

## API

 *  `new Smallstache(string)`

    Creates template object for given string.

 *  `.fill(obj): string`

    Returns a string with template filled by an object, an array or a string. 

## License
MIT