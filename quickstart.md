React.createElement(type, attributes, children) creates a JS object that describes a DOM tree:
```js
var ul = React.createElement('ul', {id:'foo'}, React.createElement('li', null, "Hello"))
```
"children" can be a React element or array of them, a string, a number, or nothing.

Let's stick that thing on the page:

```js
React.render(ul, document.body)
```
Now here's how you make a component, similar to a Backbone View:
```js
var Todo = React.createClass({
  render: function() {
    return React.createElement('div', ...)
  }})
```
"render" is mandatory and returns a SINGLE root React element.

You can create elements from components, you just don't quote the type (which should be capitalized):
```js
React.createElement(Todo, {someProperty:42})
```
The JSX transformer translates tags into React.createElement calls, so we can do this:
```js
var ul = <ul id="foo"><li>Hello</li></ul>;
```
Within tags, you use {} to inject javascript: one common usage is to render a collection:
```js
render: function() {
  var todos = [{ title: 'hello' }]
  return <div id="todo-list">
           {todos.map(function(todo) {
             return <Todo text={todo.title}/>
           })}
         </div>
)}
```
When you create a component element, the attributes you give it are available within the component as its **props**. So, within Todo#render, this.props.title == 'hello'
