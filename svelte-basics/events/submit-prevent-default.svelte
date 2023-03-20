<!-- Using https://svelte.dev/repl to run this code -->

<script>
  function handleSubmit() {
    console.log("Submitted")
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text">
  <button type="submit">Submit</button>
</form>