<script lang="ts">
	import '../app.css';
</script>

<nav>
	<ul>
		<li>
			<a href="/todos">Todos</a>
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
