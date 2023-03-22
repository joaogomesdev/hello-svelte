<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation'
	import type { PageData } from './$types'
	export let data: PageData

	function rerunLoadFunctions() {
		// a
		invalidate('app:posts')

		// // b
		// invalidate('/api/posts')

		// // c
		// invalidate((url) => url.href.includes('posts'))

		// // d) - Avoid this
		// invalidateAll()
	}

	// Instead of using allways data."something" we can use reactive declaration

	// This is not a reactive declaration
	// 	const { posts } = data
	// This is a reactive declaration
	$: ({ posts, message } = data)
</script>

<h1>Home</h1>

<button on:click={rerunLoadFunctions}>Rerun load function</button>

<p>Showing {posts.length} posts.</p>

<ul>
	{#each posts as { slug, title }}
		<li>
			<a href={`/posts/${slug}`}>{title}</a>
		</li>
	{/each}
</ul>
