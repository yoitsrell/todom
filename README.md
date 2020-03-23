# ToDOM

An exercise in putting todo lists on the DOM.


### Basic Steps

* First, let's rewrite our `printTodo` function so that it takes in a string and, instead of console.logging it, adds it as `innerText` to an `li` that we append to our `ul`.
  
* Now our print-everything function should, since it's using `printTodo` internally, put everything from our todo list on the DOM!
  
* Now let's write a function that can clear the `ul` of `li`s.
  
* Now one more function that ties that all together - a function that calls the dom-clearing-function followed by the print-all function. Now we can always call that function to refresh our DOM, removing anything in our user's todo list and repopulating it based on todos.

* Okay, almost done. Now we'll query the add button and give it an event listener function that 
  * 1) grabs the value from the add value user input box, 
  * 2) calls your add-to-the-array function, 
  * 3) calls your add-to-the-dom function, and, finally, clears the input box so what they typed in doesn't stick around and get in the way of the next todo.

* Last one! Query the dom for the remove button and give it an event listener function that 
    * 1) grabs the value of the OTHER input box, 
    * 2) calls your remove-from-the-array function, 
    * 3) calls your refresh-the-list function to populate the DOM with the updated version of our list that no longer includes the one you removed from the array, and, finally, 
    * 4) clears the input box of leftover text.


### Stretch Goals

* Add some flexbox or grid so that our list looks good. Consider the type of spacing you want for your items, your input boxes, your title, and so on.
  
* Number the todo items (you don't have to use JavaScript for this, though you could) and ask the user for the _number_ they want to remove, not the index. You'll have to translate the user's input to remove the correct element from the array--humans and robots count differently!

* Make it so that we can click on a todo list item to remove it instead of asking your user to type in a number. That's just awkward!

* Add a button to delete all items. ("Clear List", maybe?). Make sure you're removing them from the DOM _and_ the array. You already have a function to remove all items from the DOM!
