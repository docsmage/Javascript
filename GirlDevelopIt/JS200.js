// JS200: DOM - Document Object Model

// Reference: cats.html & cats.js
// Source: http://www.teaching-materials.org/jsweb/

// put all this in the js console of http://girldevelopit.com/

var header = document.getElementById("logo");
console.log(header);

// the above prints the code for where the header image is

var menu_items = document.getElementsByClassName('menu');
for (var i =0; i < menu.length; i++) {
  var menu_item = menu[i]
};

var menu_items = document.querySelectorAll('.menu li');

console.log(menu_items);

// the above prints a log of the different elements of the header menu

// well I fucked this up because I didn't even do the proper exercises. I can go back and review this for exercise.

// *************************************

// JS201: Deep Dive Notes
// Resource: teaching-materials.com/jsdom/
// check DropBox files!!!

document.body.appendChild(document.createElement('div'));

// The above creates and plugs in an empty div, which is not very useful. It's best to follow the three-step; create and store, edit, and insert. This is attempting to create and insert all at once.

// question: is there any way to call up a list of the objects you've currently created in the document so far? So I want to know that I created 'renee', 'winston', 'birthdaytext', and 'myNewElement' in the DOM.

// *************************************

// JS202 JS DOM Browser Tools Worksheet -
// Remember, the files/slides were in DropBox and are now in your DOM_Practice folder!!

// Dev Tools

// What is the keyboard shortcut to open Chrome Dev Tools?
// A: Alt + Command + j

// What are the names of thet panes you'll use most often?
// A: Elements, Styles and Console

// The Elements pane

// 1. What is the fastest way to find an element that you can see on the page?
// A: Right-click and select "Inspect Element"

// 2. You can delete nodes using the elements pane and they will be removed from the DOM. True/False
// A: False

// 3. When you edit the HTML in the elements pane, does it edit the HTML file, or just after the contents of memory?
// A: Only the contents in memory

// 4. The graphic at the bottom of the CSS area on the elements pane, when you have a DOM node selected, is a visual representation of what?
// A: The Box Model

// The Network Tab

// What are the different kinds of requests that the network tab logs?


// What kinds of resources are logged in the network tab?
// GET, POST

// The network tab is most useful for debugging what kind of request?
// Server request

// The JS Console


// 1. The name of the API that can interact with the JS console is what?
// Console

// 2. The name of the API that can interact with the DOM is what?
// A: Document

// 3. What are the names of some of the methods of the console API?
// A: Console.(enter) will show you the methods you can use in the console

// The Sources Tab

// How do you set a breakpoint?
// A. Open the sources tab, and click on the first line number within the function you want to walkthrough

// How do you set a watch?


// What are the 4 controls you can use to navigate the code while it is stopped at a breakpoint, and what do each do?


// What type of variables are listed in the pane next to the code?


// The values of the expressions in the Watch Expressions pane are a) Live, b)The value after all the code has run, c)the value they started out as