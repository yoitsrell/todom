// Make your global array here.
// Put a few todos in there to start with!
// This is mostly for testing purposes.
const todos = [];

// Rewrite your print todo function to put the todo on the dom instead of in the console.
// Keep the same name so that your other function still calls it!
function printTodo(todo) {
  // Use `document.createElement` to make an li


  // Put the ul that's already in our html file in a variable.

  // Append the li we made to the ul as the last child.
}


// Add an event listener to the ADD button to run a function that we'll write shortly that adds todos.


// Now write the function that the event listener will run. It will take what's in the user input and add it to the todo list array.

/*

Here's what it'll do, in order. Feel free to put these comments in your function!

// Place in a variable the node element for the add todo input box.

// Place in a variable the text that the user typed into that input box. You can "dot off" the variable above to find a property that's on that element. If you're not sure if you have it, try console logging what you've got!

  // Now put that todo string in your todo list. You have a function for that!
  addTodo(userInput);

  // Now use that print function to add the todo to the dom!
  printTodo(userInput);

  // Optionally but helpfully, set that input box's value back to an empty string to empty the box so you can type a different todo in there.
  inputBox.value = '';

*/


// Add an event listener to the REMOVE button to run a function that we'll write shortly that removes todos.


// Now write the function that the event listener will run. It will take what's in the user input and remove it from the todo list array.

/* Here's what it'll do, in order. Feel free to put these comments in your function!


  // Place in a variable the node element for the remove todo input box.

  // Place in a variable the text that the user typed into that input box.

  // Remove the todo at that index from the array. We have a function for that!
  

  // Here's where we'll add some code in a minute, but... not yet!
*/

// Write a function that erases everything from the list.

/*

Here's what it'll do, in order. Feel free to put these comments in your function!

  // Grab the todo list ul and put it in a variable


  // Remove all children of that list.
  // My favorite way uses `.hasChildNodes()` and `.remove()` and `.firstChild`, but there are other ways if you wanna research them instead!
*/

// NOW. You can go back up two functions to where we left off in our remove-one-item-from-the-list function, run your erase-everything-from-the-list function, and then call your function that prints everything individually.
// That print function should be calling your print-one-item function, and if that's adding it to the list, you've got it!
// The way I personally named functions, this means now adding only two lines back up there:
// clearList();
// printList();
// But whatever you named it, use those names!


// A function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above function!
function printList() {
  let i = 0;
  while (i < todos.length) {
    printTodo(todos[i]);
    i = i + 1;
  }
}

// A function that adds an item to our todo list.
// Where on the list should we add it?
function addTodo(todo) {
  todos.push(todo);
}

// A function that removes an item at a given index from our todo list.
function removeTodo(i) {
  todos.splice(i, 1);
}