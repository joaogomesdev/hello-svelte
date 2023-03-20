<!-- Using https://svelte.dev/repl to run this code -->

<script>
  let mouse = { x: 0, y: 0 };

  function handleMouseMove(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  }
</script>

<!-- Svelte uses the web standard event listeners, we can find it on MDN Docs - https://developer.mozilla.org/en-US/docs/Web/Events -->
<div on:mousemove={handleMouseMove}>
  The mouse position is {mouse.x} x {mouse.y}
</div>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  div {
    height: 100%;
  }
</style>