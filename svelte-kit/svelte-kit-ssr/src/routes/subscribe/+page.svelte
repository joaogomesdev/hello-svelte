<script lang="ts">
	async function handleSubscribe(event: Event) {
		const form = event.target as HTMLFormElement
		const data = new FormData(form)

		await fetch('/api/newsletter', {
			method: 'POST',
			body: data
		})
	}
</script>

<h1>Newsletter</h1>

<form on:submit|preventDefault={handleSubscribe}>
	<input type="email" name="email" />
	<button type="submit">Subcribe</button>
</form>
