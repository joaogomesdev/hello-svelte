<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';
	import type { Data } from './+server';

	export let data: PageData;

	let form: Data;

	async function addTodo(event: Event) {
		const formElement = event.target as HTMLFormElement;
		const data = new FormData(formElement);

		const response = await fetch(formElement.action, {
			method: 'POST',
			body: data
		});

		const responseData = await response.json();

		form = responseData;

		formElement.reset();

		await invalidateAll();
	}

	async function removeTodo(event: Event) {
		const formElement = event.target as HTMLFormElement;
		const data = new FormData(formElement);

		const response = await fetch(formElement.action, {
			method: 'DELETE',
			body: data
		});

		await invalidateAll();
	}
</script>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form on:submit|preventDefault={removeTodo} method="POST">
				<input type="hidden" name="id" value={todo.id} />
				<button type="submit" class="delete">❌</button>
			</form>
		</li>
	{/each}
</ul>

<form action="" method="POST" on:submit|preventDefault={addTodo}>
	<input type="text" name="todo" />
	{#if form?.errors?.todo}
		<p class="error">This field is required.</p>
	{/if}
	<button type="submit" class="add">+ Add todo</button>
</form>

{#if form?.success}
	<p>Added todo! 🎉</p>
{/if}

<style>
	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		text-transform: capitalize;
	}

	.delete {
		margin: 0;
		background: none;
		border: none;
	}

	.error {
		color: tomato;
	}
</style>
