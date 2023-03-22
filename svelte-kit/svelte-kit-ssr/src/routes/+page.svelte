<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	// Instead of using allways data."something" we can use reactive declaration

	// This is not a reactive declaration
	// 	const { posts } = data
	// This is a reactive declaration
	$: ({ posts, message } = data)
</script>

<h1>Home</h1>

<p>Showing {posts.length} posts.</p>

<ul>
	{#each posts as { slug, title }}
		<li>
			<a href={`/posts/${slug}`}>{title}</a>
		</li>
	{/each}
</ul>
