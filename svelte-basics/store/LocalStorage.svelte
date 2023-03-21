<script>
  import { localStorageStore } from './localStorageStore'

  let message = localStorageStore('message', 'Hello Svelte 👌')

  $message = 'Bye Svelte 👋'
</script>

{$message}