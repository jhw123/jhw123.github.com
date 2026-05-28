export const PATTERNS = [
  [
    {
      role: 'user' as const,
      content: 'how to do this',
    },
    {
      role: 'assistant' as const,
      content: `
You're doing great so far! For Step 3, you need to add an input field where users can type a new todo. Here's how to do it: 
1. **Inside the \`<div id="app">\`**, add an \`<input>\` element. 
2. Use the \`v-model\` directive to bind the input value to \`newTodo\`. This will keep the input field and your app's data in sync. 
3. Add a \`placeholder\` attribute to give users a hint about what to type. Here’s a simple example of what the input field might look like: 
      
\`\`\`html 
<input v-model="newTodo" placeholder="Enter a new todo" />
\`\`\`

Try adding this input element to your code inside the \`<div id="app">\`. Let me know if you need any help!
`.trim(),
    },
    {
      role: 'user' as const,
      content: 'how to do this',
    },
    {
      role: 'assistant' as const,
      content: `
You're making good progress! For Step 4, you need to add a button that will call the \`addTodo\` method when clicked. Here's how to do it: 
1. **Inside the \`<div id="app">\`**, add a \`<button>\` element. 
2. Use the \`@click\` directive to bind the button click to the \`addTodo\` method. 

Here’s an example of what the button might look like: 

\`\`\`html 
<button @click="addTodo">Add Todo</button>
\`\`\`

Try adding this button below your input field in the \`<div id="app">\`. Let me know if you need any help!
`.trim(),
    },
  ],
]
