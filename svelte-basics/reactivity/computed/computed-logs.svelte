<!-- Using https://svelte.dev/repl to run this code -->

<!-- We can use computed values to log when the value changes -->
<script>
  let count = 0;

  $: console.log(count)
</script>

<p>Check the console!</p>
<button on:click={() => count += 1}>Increment</button>