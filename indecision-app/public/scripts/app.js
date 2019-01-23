'use strict';

console.log('App.js is Running');
//JSX  Javascript - XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' JSX Expression..... '
    ),
    React.createElement(
        'p',
        null,
        'paragraph'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
