<script>
  import { data } from './store'

  import Slide from './Slide.svelte'
  import Controls from './Controls.svelte'
  import Caption from './Caption.svelte'

  export let category = 'steam'

  const BASE = 'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/'

  fetch(BASE + '?category=' + category)
    .then(res => res.json())
    .then(_data => ($data = _data.posts))
    .catch(error => console.error(error))
</script>

<div class="slideshow">
  <Slide />
  <Controls />
  <Caption />
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  .slideshow {
    position: relative;
    padding: 4rem 0;
    background-color: #f0f2f5;
  }
</style>
