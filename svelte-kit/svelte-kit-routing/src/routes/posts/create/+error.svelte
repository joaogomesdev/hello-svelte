<script lang="ts">
  import { page } from '$app/stores'
</script>

<h1>Ups! 💥</h1>

<p>Something whent wrong :(</p>

<pre>
  {JSON.stringify($page, null, 2)}
</pre>