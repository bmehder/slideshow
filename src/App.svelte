<script>
  import { getData } from './utils'

  import Slide from './Slide.svelte'
  import Counter from './Counter.svelte'
  import Controls from './Controls.svelte'
  import Caption from './Caption.svelte'

  export let category = 'steam'
  export let base =
    'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/'
</script>

<div class="slideshow" use:getData={{ category, base }}>
  <Counter />
  <Slide />
  <Controls />
  <Caption />
</div>

<style>
  .slideshow {
    position: relative;
    padding: 4rem 0;
    background-color: #f0f2f5;
  }
</style>
