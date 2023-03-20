<!-- Using https://svelte.dev/repl to run this code -->

<!-- We can add Typescript support by adding lang="ts" on the script tag-->
<script lang="ts">
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<p>Clicked {count} {count === 1 ? 'time' : 'times'}</p>
<button on:click={increment}>Increment</button>

<!-- Scoped styles by default -->
<style>
  p {
    color: teal;
  }
</style>