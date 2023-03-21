<script lang="ts">
  
</script>


<div class="posts">
  <aside>
    <h4>Your posts</h4>

    <nav>
      <ul>
        <li>
          <a href="/posts/one">Post one</a>
        </li>
        <li>
          <a href="/posts/two">Post two</a>
        </li>
        <li>
          <a href="/posts/three">Post three</a>
        </li>
      </ul>
    </nav>
  </aside>
  
  <main>
    <slot /> 
  </main>
  
</div>

<style>
  .posts {
    display: grid;
    gap: 2rem;
    grid-template-columns: 200px 60ch;
    margin-top: 2rem;
  }
</style>