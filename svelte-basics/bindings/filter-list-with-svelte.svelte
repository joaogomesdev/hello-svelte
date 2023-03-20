<!-- Using https://svelte.dev/repl to run this code -->

<script>
  let list = ["React", "Vue", "Svelte"];
  let filteredList = [];
  let searchQuery = '';

  function filterList() {
    filteredList = list.filter((item) => {
      return item.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
</script>

<!-- More on https://svelte.dev/docs bind:property
-->
<input 
  type="text"
  on:input={filterList}
  bind:value={searchQuery}
>

<ul>
  {#each filteredList as item}
    <li>{item}</li>
  {/each}
</ul>