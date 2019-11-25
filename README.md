# ToDOM

An exercise in putting todo lists on the DOM.

### Architecture

* We want every single function to be in its own `.js` file. Every. Single. One. Then you can just load them all into the html in the correct order and have nice, simple files. You'll know you have things in the wrong order when your console tells you you're accessing a variable before it's been assigned.
* Use anonymous event listener functions. Ask a friend or an enemy or a teacher (we are neither your friend nor your enemy, apparently) if you need help with this new concept/syntax!


### Basic Steps

* We'll want an array to store the content of each todo. Just what the todo _is_ for now (i.e. its title). We'll add item status and date added later!
* Let's also write a function that, given a string, can add that as an item in our todos array. It could be at the start of the list or the end; it's up to you! Try testing it out in your console; you can run a live server and just call the function within the browser's console. Then you can check your todos array within the console as well!
* Let's also write a function that can remove an item at a given index from our array. Test it out in the console as well!
* Next is a helper function that, given a string, prints it as an li on the DOM. Also easy to test in the browser.
* And now a function that prints out the whole todos array list to the DOM, using the above helper function. Try adding a few todos to our array and then calling this function.
* Now the opposite direction - a function that clears the list from the DOM.
* Now one more function that ties that all together - a function that calls the dom-clearing-function followed by the print-all function. Now we can always call that function to refresh our DOM, removing anything in our user's todo list and repopulating it based on todos.
* Okay, almost done. Now we'll query the add button and, within its `addEventListener` method, write an anonymous function that 1) grabs the value from the add value user input box, 2) calls your add-to-the-array function, 3) calls your add-to-the-dom function, and, finally, clears the input box so what they typed in doesn't stick around and get in the way of the next todo.
* Last one! Query the dom for the remove button, and, within its `addEventListener` method, write an anonymous function that 1) grabs the value of the OTHER input box, 2) calls your remove-from-the-array function, 3) calls your reset-the-list function to populate the dom with the updated version of our list WITHOUt the one you removed from the array, and, finally, 4) clears the input box of leftover text.


### Stretch Goals

* Add some flexbox or grid so that our list looks good. Consider the type of spacing you want for your items, your input boxes, your title, and so on.
* Make the site responsive. Most people use todo apps on their phone instead of their computers.
* Number the todo items (you don't have to use JavaScript for this, though you could) and ask the user for the _number_ they want to remove, not the index. You'll have to translate the user's input to remove the correct element from the array--humans and robots count differently!
* Make it so that we can click on a todo list item to remove it instead ofasking your user to type in a number. That's just awkward!
* Add a button to delete all items. ("Clear List", maybe?). Make sure you're removing them from the DOM _and_ the array. You already have a function to remove all items from the DOM!