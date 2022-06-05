<script>
  import { data, index } from './utils'
</script>

{#if $data.length > 0}
  <aside>
    <img src={$data[$index]?.featured_image} alt="Student Artwork" />
  </aside>
{/if}

<style>
  aside {
    max-width: 600px;
    margin: auto;
    position: relative;
  }
  img {
    display: block;
    width: 100%;
  }
</style>
