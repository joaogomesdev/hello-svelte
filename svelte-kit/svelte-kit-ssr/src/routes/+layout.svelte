<script lang="ts">
	import '../app.css'
</script>

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
