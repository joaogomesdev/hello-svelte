<script>
  import { fade } from 'svelte/transition'

  let showFade = false 

  function toggleFade() {
    showFade = !showFade
  }
</script>

<button on:click={toggleFade}>Wax poetic</button>

{#if showFade}
  <blockquote 
    transition:fade={{
      delay: 250,
      duration: 300
    }}
  >
    Memories fade, but friends are forever
  </blockquote>
{/if}