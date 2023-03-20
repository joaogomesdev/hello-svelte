<!-- Using https://svelte.dev/repl to run this code -->

<!-- To change values based on other values we can use computed propeties, for that we use $: -->

<script>
  // state
  let album = [
    { track: 'Track 1', length: 100},
    { track: 'Track 2', length: 240},
    { track: 'Track 3', length: 280},
  ]
  
  // computed property
  $: albumLength = getAlbumLength(album)

  function getAlbumLength() {
    let lengthSeconds = album.reduce(
      (totalLength, currentValue) => {
        return totalLength + currentValue.length
      }, 0)

  let [minutes, seconds] = 
  (lengthSeconds / 60)
  .toFixed(2)
  .toString()
  .split('.')

  return { minutes, seconds}
  }

  function addTrack() {
    album = [...album, { track: 'Track 4', length: 420 }]
  }

</script>

<p>Album: {album.map(track => track.track)}</p>
<p>The album has {albumLength.minutes} minutes and {albumLength.seconds} seconds</p>
<button on:click={addTrack}>Add track</button>