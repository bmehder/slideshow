<script>
  import { data, index } from './store'
</script>

{#if $data.length > 0}
  <div>
    <p>{@html $data[$index]?.excerpt}</p>
  </div>
{/if}

<style>
  div {
    max-width: 600px;
    margin: auto;
    padding: 2rem 2rem 1rem;
    background-color: #222;
    color: white;
    line-height: 1.5em;
  }
</style>
