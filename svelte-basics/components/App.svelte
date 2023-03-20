<!-- Using https://svelte.dev/repl to run this code -->

<script>
  import Artist from './Artist.svelte'
  import Album from './Album.svelte'

  let artists = [
		{
			name: 'Fleetwood Mac',
			albums: [
				{
					name: 'Tango in the Night',
					year: 1987,
					tracks: [
						{ title: 'Big Love', length: '3:37' },
						{ title: 'Seven Wonders', length: '3:38' },
						{ title: 'Everywhere', length: '3:48' },
						{ title: 'Caroline', length: '3:50' },
						{ title: 'Tango in the Night', length: '3:56' },
						{ title: 'Mystified', length: '3:08' },
					],
				},
			],
		},
	]
</script>

{#each artists as artist}
  <Artist artistName={artist.name} />
  {#each artist.albums as album}
		<Album
			albumTitle={album.name}
			albumTracks={album.tracks}
		/>
  {/each}
{/each}