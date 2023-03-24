<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	const login: SubmitFunction = () => {
		return async ({ result }) => {
			if (result.type === 'redirect') {
				await applyAction(result);
			}
		};
	};
</script>

<h1>Login</h1>

<form method="POST" action="/login" use:enhance={login}>
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
