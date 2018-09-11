![cf](http://i.imgur.com/7v5ASc8.png) 02: Tools and Context
=====================================

## Learning Objectives
* Students will be able to control function context by using `call`, `apply`, and `bind`
* Students will be able to handle thrown errors through the use of `try` and `catch`
* Students will be able to interpret the different types of errors in Javascript
* Students will understand the difference between a constructor function and a factory function

## Resources
* Read [YDKJS: Lexical Scope](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch2.md) (Feel free to skip the **'Cheating Lexical'** section)
* Read [YDKJS: Asynchrony: Now & Later ](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch1.md) (Stop reading once you get to the **'Parallel Threading'** section)
* Grooking Algorithms: Big O Notation (Page 5 to 19)
* Skim [MDN: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
* Skim [about package.json]
* Skim [npm scripts docs]


## Outline

### Semantic Versioning
The NodeJS/NPM community follows semantic versioning (semver). Semantic versioning describes how to manage version changes to a software product. Semver formats the version number using a `MAJOR.MINOR.PATCH` construct. You should change a MAJOR version when you make incompatible API changes, a MINOR version when you add functionality in a backwards-compatible manner, or a PATCH version when you make backwards-compatible bug fixes.

### Errors
Error messages are super important tools for debugging broken code. Javascript has many built in error messages, but you can also define your own errors in your programs. It is important to not forget that errors will happen in production. Error logs are kept in order to fix bugs in productions. Writing good error messages is critical for finding and fixing bugs in deployed applications.


### Handling Thrown Errors
Javascript functions can throw errors. Throwing an `Error` is a great way to force developers to use a function correctly. Un-handled errors will often crash Javascript and stop program execution. This is referred to as *failing fast*. The idea is that the sooner the code fails, the sooner a developer will find bugs and fix them. Though throwing errors is a useful feature of the language itself, programs like servers need a way to continue running in spite of bugs in the code. Javascript has a `try {} catch (error) {}` syntax for handling this.

``` javascript
let userInput = '{'
try {
 let data = JSON.parse(userInput)
 // do something with data
} catch(e) {
  console.error(e)
}
```

### Error Cheat Sheet
| Type |  Reason |
| --- | --- |
| Error | generic error |
| ReferenceError | an attempt was made to access a variable that is not defined |
| SyntaxError | the javascript is not valid |
| TypeError | a provided argument was no the allowable type |
| SystemError | a NodeJS error that occurs when a system error has occurred |

### System Error Cheat Sheet
* `EACCESS` - an attempt to access a file without the right permissions
* `EADDRINUSE` - an attempt to start a server on a PORT that is already in use
* `ECONNREFUSED` - a connection was deliberately refused by the target machine
* `ECONNRESET` - a connection was forcibly closed by a peer
* `EEXIST` - a file exists and the attempted action required that it didn't
* `EISDIR` - an action expected to act on a file but found a directory
* `EMFILE` - too many files were open for your operating system to handle
* `ENOENT` - an action expected a file, but did not find one
* `ENOTDIR` - an action expected a directory, but found something else
* `ENOTEMPTY` - an action expected an empty directory, but found one with data in it
* `EPERM` - an attempt to do something that you currently don't have permissions to do
* `EPIPE` - an attempt to write data to a connection that had been closed

### Context
By default, when a Javascript function belongs to an object, it is called a method. The object the method belongs to is called the methods **context**. In a function, the keyword `this` points to it's context.

A functions context can be reassigned using the function methods `call`, `apply` and `bind`. Arrow functions inherit their parent context, and cannot use call, apply, and bind.

##### Call
`call` is a function method that invokes a function with a specified context and comma separated arguments.

##### Apply
`apply` is a function method that invokes a function with a specified context and an array of arguments.

##### Bind
`bind` is a function method that returns a new function with specified context and comma separated default arguments.

### Factory Functions (Functional Programming)
A factory function is a pure function that acts like a constructor but without the `new` keyword. You can almost think of this as a single object builder - not a constructor that requires direct object instantiation.

### Hoisting
In Javascript, variable and function declarations get "hoisted" to top of your code before it runs. When the Javascript runtime executes your code, it first reorganizes what you have written so that all variable and function definitions are at the top of their current function scope. Developers that are new to Javascript often find hoisting strange, but it is a feature of the language that cannot be disabled. Learn to use hoisting as a tool!

``` javascript
// code before hoisting (how a programmer wrote the code)
var chars = ['a', 'b', 'c'];
var result = upperCharList(chars);
console.log(result);

function upperCharList(list){
  var result = [];
  for(var i=0; i<list.length; i++){
    var upper = list[i].toUpperCase());
    result.push(upper);
  }
  return result;
}
```

``` javascript
// after hoisting (how the code actually runs)
var chars, result;
function upperCharList(list){
  var result, i, upper;
  result = [];
  for(i=0; i<list.length; i++){
    upper = list[i].toUpperCase();
    result.push(upper);
  }
  return result;
}

chars = ['a', 'b', 'c'];
result = upperCharList(chars);
console.log(result)
```


<!--links -->
[node error docs]: https://nodejs.org/dist/latest-v6.x/docs/api/errors.html
[about package.json]: https://docs.npmjs.com/files/package.json
[npm scripts as build tools]: https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
[npm scripts docs]: https://docs.npmjs.com/misc/scripts
