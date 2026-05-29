export const PATTERNS = [
  // Constructive, Passive
  [
    {
      role: 'user' as const,
      content: `Give me an example of how to declare these objects`,
    },
    {
      role: 'comment' as const,
      type: 'help-seeking' as const,
      content: '[Constructive] The student chose to ask for an example.',
    },
    {
      role: 'assistant' as const,
      content: `
It looks like you're ready to set up the app's data! To declare the objects for your app, you can return an object from the \`data()\` function that includes: 
1. **An array for the list of todos** (initially empty or with a sample todo). 
2. **A string for the new todo text** (initially empty). 

Here's a simple structure you can use: 

\`\`\`javascript
data() { 
  return {
    todos: [], // This will hold your list of todos 
    newTodo: "" // This will hold the text for the new todo 
  };
} 
\`\`\` 

Try adding this to your \`data()\` function. Let me know if you need more help!
`.trim(),
    },
    {
      role: 'comment' as const,
      type: 'response-use' as const,
      content: '[Passive] The student copied the code verbatim.',
    },
    {
      role: 'system' as const,
      content: `
\`\`\`javascript
data() { 
  return {
    todos: [], // This will hold your list of todos 
    newTodo: "" // This will hold the text for the new todo 
  };
} 
\`\`\` 
`.trim(),
    },
  ],
  // Constructive, Active
  [
    {
      role: 'user' as const,
      content: `no how can i do something like that? show me one example ill try the rest`,
    },
    {
      role: 'comment' as const,
      type: 'help-seeking' as const,
      content: '[Constructive] The student asked for an example instead of answer.',
    },
    {
      role: 'assistant' as const,
      content: `
To set up the app's data, you need to return an object from the \`data()\` function. 
Here's an example of how to do that for the list of todos, the new todo text, and the next ID: 

\`\`\`javascript
data() { 
  return {
    todos: [], // This will hold the list of todos 
    newTodo: "", // This will hold the text for the new todo 
    nextId: 1 // This will be used for assigning unique IDs
  };
}
\`\`\`

Try adding this code to your \`data()\` function. Let me know when you're ready for the next step!
`.trim(),
    },
    {
      role: 'comment' as const,
      type: 'response-use' as const,
      content: '[Active] The student did not copy the code but made an adjustment (newTodo).',
    },
    {
      role: 'system' as const,
      content: `
\`\`\`javascript
return {
  todos: [],
  newTodo = ""
}
\`\`\` 
`.trim(),
    },
  ],
  // Constructive, Constructive
  [
    {
      role: 'user' as const,
      content: `can you give me list of steps and hints for part 3?`,
    },
    {
      role: 'comment' as const,
      type: 'help-seeking' as const,
      content: '[Constructive] The student asked for hints instead of a direct answer.',
    },
    {
      role: 'assistant' as const,
      content: `
You're on the right track with your input field! Here are some hints to help you complete Step 3: 
1. **Input Element**: Make sure your \`<input>\` element is properly closed. You need to add a closing \`>\` at the end of the input tag. 
2. **Data Binding**: You correctly used \`v-model\` to bind the input value to \`newTodo\`. This ensures that whatever the user types in the input field updates the \`newTodo\` property in your app's data. 
3. **Placeholder**: You have a placeholder, but check the spelling. It should be "Enter a new todo" instead of "Ener a new todo". 
4. **Positioning**: Ensure that the input field is placed correctly in your HTML structure, ideally before the button that will add the todo. 

Would you like to make these adjustments and try again?
`.trim(),
    },
    {
      role: 'comment' as const,
      type: 'response-use' as const,
      content: '[Constructive] The student create code on their own based on the hints.',
    },
    {
      role: 'system' as const,
      content: `
\`\`\`html
<input v-model="newTodo" placeholder="Enter a new todo" />
\`\`\`      
      `.trim(),
    },
  ],
  // Active, Passive
  [
    {
      role: 'user' as const,
      content: `How do I push a new todo object into the todos array?`,
    },
    {
      role: 'comment' as const,
      type: 'help-seeking' as const,
      content: '[Active] The student asked a knowledge-specific question.',
    },
    {
      role: 'assistant' as const,
      content: `
To push a new todo object into the \`todos\` array, you can use the \`push\` method. 
Here's how you can structure it inside your \`createTodo\` function: 
1. Create a new object with properties for \`id\` and \`text\`. 
2. Use \`this.todos.push()\` to add the new object to the \`todos\` array. 
3. Make sure to increment the \`id\` for each new todo and clear the \`newTodo\` string afterward. 

Here's a quick example of what that might look like: 

\`\`\`javascript
createTodo() {
  this.todos.push({ id: this.nextId++, text: this.newTodo }); 
  this.newTodo = ""; // Clear the input field
} 
\`\`\` 

Would you like to try adding this logic to your \`createTodo\` function?  
`.trim(),
    },
    {
      role: 'comment' as const,
      type: 'response-use' as const,
      content: '[Passive] The student copied the code verbatim.',
    },
    {
      role: 'system' as const,
      content: `
\`\`\`javascript
createTodo() {
  this.todos.push({ id: this.nextId++, text: this.newTodo }); 
  this.newTodo = ""; // Clear the input field
} 
\`\`\` 
`.trim(),
    },
  ],
  // Active, Active
  [
    {
      role: 'user' as const,
      content: `When I add a function to create a new todo, what is the structure of the funtion, and how do I declare it?`,
    },
    {
      role: 'comment' as const,
      type: 'help-seeking' as const,
      content: '[Active] The student asked a knowledge-specific question.',
    },
    {
      role: 'assistant' as const,
      content: `
To create a function that adds a new todo, you'll want to define a method inside the \`methods\` object. 
Here's the structure you should follow: 
1. **Method Name**: Choose a name for your function, like \`addTodo\`. 
2. **Function Body**: Inside the function, you'll need to: 
  - Create a new todo object with a unique ID and the text from \`newTodo\`. 
  - Push this new todo object into the \`todos\` array. 
  - Clear the \`newTodo\` string to reset the input field. 

Here's a basic outline of how the function should look: \

\`\`\`javascript 
addTodo() { // Create a new todo object 
  const newTodoItem = { 
    id: this.nextId++, // Incremental ID 
    text: this.newTodo // Text from the input 
  }; // Add the new todo to the todos array 
  this.todos.push(newTodoItem); // Clear the input field 
  this.newTodo = ""; 
} 
\`\`\` 

You can add this method inside the \`methods\` object. Would you like to try writing it out?      
`.trim(),
    },
    {
      role: 'comment' as const,
      type: 'response-use' as const,
      content: '[Active] The student asked a follow-up clarification question.',
    },
    {
      role: 'user' as const,
      content: `Can I use ".nextId++" if that variable doesn't exist?`,
    },
  ],
  // Active, Constructive
  [
    {
      role: 'user' as const,
      content: `Should I identify which item to remove by id?`,
    },
    {
      role: 'comment' as const,
      type: 'help-seeking' as const,
      content: '[Active] The student ask a confirmation question about a specific knowledge.',
    },
    {
      role: 'assistant' as const,
      content: `
Yes, identifying which item to remove by \`id\` is a good approach. 
This way, you can ensure that you are removing the correct todo from the list. 
To implement this, you can create a \`removeTodo\` method that takes an \`id\` as a parameter. 
Inside this method, you can filter the \`todos\` array to exclude the todo with the matching \`id\`. 
Would you like to try writing the \`removeTodo\` method now?      
`.trim(),
    },
    {
      role: 'comment' as const,
      type: 'response-use' as const,
      content: '[Constructive] The student create code on their own based on the response.',
    },
    {
      role: 'system' as const,
      content: `
\`\`\`javascript
removeTodo(id) { 
  this.todos = this.todos.filter(todo => todo.id !== id); 
} 
\`\`\`      
      `.trim(),
    },
  ],
  // Passive, Passive
  [
    {
      role: 'user' as const,
      content: 'how to do this',
    },
    {
      role: 'comment' as const,
      type: 'help-seeking' as const,
      content: '[Passive] The student asked a broad question without any effort.',
    },
    {
      role: 'assistant' as const,
      content: `
You're doing great so far! For Step 3, you need to add an input field where users can type a new todo. Here's how to do it: 
1. **Inside the \`<div id="app">\`**, add an \`<input>\` element. 
2. Use the \`v-model\` directive to bind the input value to \`newTodo\`. This will keep the input field and your app's data in sync. 
3. Add a \`placeholder\` attribute to give users a hint about what to type.

Here’s a simple example of what the input field might look like: 
      
\`\`\`html 
<input v-model="newTodo" placeholder="Enter a new todo" />
\`\`\`

Try adding this input element to your code inside the \`<div id="app">\`. Let me know if you need any help!
`.trim(),
    },
    {
      role: 'comment' as const,
      type: 'response-use' as const,
      content: '[Passive] The student copied the code verbatim.',
    },
    {
      role: 'system' as const,
      content: `
\`\`\`html 
<input v-model="newTodo" placeholder="Enter a new todo" />
\`\`\`
`.trim(),
    },
  ],
  // Passive, Active
  [
    {
      role: 'user' as const,
      content: `how to add an input element so users can type a new todo`,
    },
    {
      role: 'comment' as const,
      type: 'help-seeking' as const,
      content: '[Passive] The student copied the activity instruction verbatim.',
    },
    {
      role: 'assistant' as const,
      content: `
To add an input element for users to type a new todo, you can use the \`<input>\` tag. Here's what you need to do: 
1. Inside the \`<div id="app">\`, add an \`<input>\` element.
2. Use the \`v-model\` directive to bind the input value to \`newTodo\`. 

It should look something like this: 

\`\`\`html
<input v-model="newTodo" placeholder="Type a new todo" /> 
\`\`\` 

This will allow the input field to update the \`newTodo\` data property in real-time. Would you like to proceed to the next step?      
`.trim(),
    },
    {
      role: 'comment' as const,
      type: 'response-use' as const,
      content: '[Active] The student made an adjustment to the code (placeholder).',
    },
    {
      role: 'system' as const,
      content: `
\`\`\`html
<input v-model="newTodo" placeholder="learn web programming" /> 
\`\`\` 
`.trim(),
    },
  ],
  // Passive, Constructive
  [
    {
      role: 'user' as const,
      content: `Show all todos using a list. Use Vue's looping directive to repeat elements for each todo and add a delete button next to each one.`,
    },
    {
      role: 'comment' as const,
      type: 'help-seeking' as const,
      content: '[Passive] The student copied the activity instruction verbatim.',
    },
    {
      role: 'assistant' as const,
      content: `
Your code for displaying the todo list looks good! You are correctly using the \`v-for\` directive to loop through the \`list\` and display each todo item along with a delete button. 
Here’s a quick checklist to ensure everything is set up correctly: 
1. **Input Field**: You have an input field bound to \`toDoContent\`, which is great. 
2. **Add Button**: The button to add todos is correctly set up to call \`createToDo\`. 
3. **Todo List**: You are using \`<ul>\` and \`<li>\` elements with \`v-for\` to display each todo. 
4. **Delete Button**: The delete button is correctly set up to call \`removeTodo\` with the specific todo item. 

If everything is working as expected, you should be able to add todos and remove them using the delete button. 
If you are facing any specific issues or errors, please let me know, and I can help you troubleshoot!
`.trim(),
    },
    {
      role: 'comment' as const,
      type: 'response-use' as const,
      content: '[Constructive] The student extends knowledge by asking a "why" question.',
    },
    { role: 'user' as const, content: `why does every item in the list need a unique key?` },
  ],
]
