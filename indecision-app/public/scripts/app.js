'use strict';

console.log('App.js is Running');
//JSX  Javascript - XML
var template = React.createElement(
  'h1',
  null,
  'JSX Expression.....'
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
