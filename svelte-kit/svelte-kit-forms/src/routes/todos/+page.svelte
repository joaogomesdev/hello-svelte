<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let isLoading = false;

	const addTodo: SubmitFunction = (input) => {
		// form validations
		isLoading = true;

		return async ({ update }) => {
			// do something after submit
			isLoading = false;
			await update();
		};
	};
</script>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form method="POST" action="?/removeTodo" use:enhance>
				<input type="hidden" name="id" value={todo.id} />
				<button type="submit" class="delete">❌</button>
			</form>
		</li>
	{/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance={addTodo}>
	<input type="text" name="todo" />
	{#if form?.missing}
		<p class="error">This field is required.</p>
	{/if}
	<button
		aria-busy={isLoading}
		class="add"
		disabled={isLoading}
		class:secondary={isLoading}
		type="submit"
	>
		{#if !isLoading}
			+ Add todo
		{/if}
	</button>
	<button formaction="?/clearTodos" class="secondary">Clear</button>
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
