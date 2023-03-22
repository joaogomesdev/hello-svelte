<script lang="ts">
	import { page } from '$app/stores'
	import type { PageData } from './$types'

	export let data: PageData

	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)
	}
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<hgroup>
	<h1>{data.post.title}</h1>
	<h2>{formatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="content">
	{@html data.post.content}
</div>

<div class="posts">
	<h3>Posts</h3>

	<ul>
		{#each data.posts as { title, slug }}
			<li>
				<a href="/posts/{slug}">{title}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	hgroup {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.posts {
		margin-top: 2rem;
	}
</style>
