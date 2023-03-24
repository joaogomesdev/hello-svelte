<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Login</h1>

<form method="POST" use:enhance>
	<input type="text" name="user" value={form?.data.user ?? ''} />
	{#if form?.errors?.user}
		<p class="error">Username is required!</p>
	{/if}
	<input type="password" name="password" value={form?.data.password ?? ''} />
	{#if form?.errors?.password}
		<p class="error">Password is required!</p>
	{/if}

	<button type="submit">Login</button>
</form>

<style>
	.error {
		color: tomato;
	}
</style>
