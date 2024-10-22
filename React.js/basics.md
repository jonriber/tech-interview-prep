# React Basics

## What is React.js?

Well, React basically do 2 things on the browser:

1. Displays HTML
2. Changes HTML when user does something

Using JSX, we are able to tell React the whats and hows on displaying content to the page.

JSX is able to:

- Tell React to create a normal HTML element on the page
- Tell React to show another component on the page

## How does a React app start up?

- All js files inside my project structure are bundled together into a single file, them sent to a server
- User makes a request to the server and gets an HTML PLUS the bundle
- User´s browser executes the code

After first server response, browser takes the index.html file and gets an instruction to execute the bundle file.

`bundle file` is the place where our react app lives.

Then, React start up like this:

- Find the div with id of 'root' in the DOM
- Tell React to take control of that element
- Tell React to get JSX from the APP component, turn into HTML and show in the root

## what is the 'useState' function?

`useState` is a special function that works with React´s 'state' system

State is like a variable in React.

State is used to store data that changes over time.

Whenever state changes, React automatically updates content on the screen.

## How to use an external API on a React app?

## How to show basic content

There are five steps that must be followed in order to show basic content

1- import the React and ReactDom libraries
2- get a reference to the div with ID root
3- Tell React to take control of that element
4- Create a component
5- Show the component on the screen