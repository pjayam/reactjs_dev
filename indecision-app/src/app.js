console.log('App.js is Running')
//JSX  Javascript - XML
var template = (
<div> 
    < h1 > JSX Expression..... </h1>
    <p>paragraph</p > 
</div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);