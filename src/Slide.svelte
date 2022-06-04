<script>
  import { data, selected } from './store'
</script>

<aside>
  <img src={$data[$selected]?.featured_image} alt="Student Artwork" />
</aside>

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
