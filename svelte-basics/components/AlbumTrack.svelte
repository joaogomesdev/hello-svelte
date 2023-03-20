<!-- Using https://svelte.dev/repl to run this code -->

<script>
  export let setPlaying
  export let playing
  export let title
  export let length

  $: playing = playing === title
</script>

<li class:playing>
  <button on:click={() => setPlaying(title)}>▶️</button>
  <span>{title}</span>
  <span>🕐 {length}</span>
</li>


<style>
  .playing {
    color: teal;
  }
</style>