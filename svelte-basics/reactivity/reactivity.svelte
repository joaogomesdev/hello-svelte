<!-- Using https://svelte.dev/repl to run this code -->

<script>
  let list = ['React', 'Vue']

  function handleClick() {
    // doesn't update
      // list.push('Svelte')
    // until you assign it
      // list = list

    // so its easier to do the spread operator
    list = [...list, 'Svelte']
  }
</script>

<p>{list}</p>
<button on:click={handleClick}>Click</button>