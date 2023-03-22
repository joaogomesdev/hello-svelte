<script lang="ts">
	import { page } from '$app/stores'

	import '../app.css'
</script>

<svelte:head>
	<title>Posts app</title>
</svelte:head>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/posts">Posts</a>
		</li>
		<li>
			<a href="/subscribe">Subscribe</a>
		</li>
	</ul>
</nav>

<div class="content">
	<slot />
</div>

<style>
	.content {
		margin-top: 2rem;
	}
</style>
