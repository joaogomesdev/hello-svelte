<!-- Using https://svelte.dev/repl to run this code -->

<!-- To change values based on other values we can use computed propeties, for that we use $: -->

<script>
  // state
  let items = [1, 2, 3, 4]
  
  // computed property
  $: amount = items.length

  function addItem() {
    items = [...items, items.length + 1]
  }
</script>

<p>Items: {items}</p>
<p>The amount is {amount}</p>
<button on:click={addItem}>Add item</button>