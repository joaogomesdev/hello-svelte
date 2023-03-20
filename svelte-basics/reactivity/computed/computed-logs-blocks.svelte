<!-- Using https://svelte.dev/repl to run this code -->

<!-- We can use computed values to log when the value changes -->
<script>
  let count = 0;

  $: {
    console.log(`The count is ${count}`)

    if (count >= 4) {
      console.log("Restarting count.")
      count = 0
    } 
  }
</script>

<p>Check the console!</p>
<button on:click={() => count += 1}>Increment</button>