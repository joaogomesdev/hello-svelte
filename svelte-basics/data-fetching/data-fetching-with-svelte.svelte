<!-- Using https://svelte.dev/repl to run this code -->

<script>
  async function fetchPokemon(pokemonName) {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let response = await fetch(`${url}${pokemonName}`);
    let { name, sprites } = await response.json();

    return {
      name,
      image: sprites["front_default"],
    };
  }
</script>

{#await fetchPokemon('pikachu')}
<p>Fetching pokemon..</p>
{:then pokemon}
  <h1>{pokemon.name}</h1>
  <img src={pokemon.image} alt={pokemon.name} />  
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
