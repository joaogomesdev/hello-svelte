<script>
  import { message } from './stores.js'

  function updateStore() {
    $message = 'Bye Svelte 👋'
  }
</script>

<p>{$message}</p>
<button on:click={updateStore}>Update store</button>