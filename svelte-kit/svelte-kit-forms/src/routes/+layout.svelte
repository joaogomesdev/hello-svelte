<script lang="ts">
	import '../app.css';
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/todos">Todos</a>
		</li>
		<li>
			<a href="/login">Login</a>
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
