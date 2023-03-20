<!-- Using https://svelte.dev/repl to run this code -->

<script>
  let todos = [
  { id: 1, text: "Todo 1", completed: true },
  { id: 2, text: "Todo 2", completed: false },
  { id: 3, text: "Todo 3", completed: false },
  { id: 4, text: "Todo 4", completed: true },
];
</script>

<!-- Simple version -->
<!-- 
<ul>
{#each todos as todo}
  <li>
    <input checked={todo.completed} type="checkbox"/>
    <span>{todo.text}</span>
  </li>
{/each}
</ul> 
-->

<!-- We can deconstruct the values, and set the index -->
<ul>
{#each todos as {id, completed, text}, index(id)}
<li>
  <input checked={completed} type="checkbox"/>
  <span>{text}</span>
</li>
{/each}
</ul> 