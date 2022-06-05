<script>
  import { data } from './store'

  import Slide from './Slide.svelte'
  import Counter from './Counter.svelte'
  import Controls from './Controls.svelte'
  import Caption from './Caption.svelte'

  export let base =
    'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/'
  export let category = 'steam'

  fetch(base + '?category=' + category)
    .then(res => res.json())
    .then(_data => ($data = _data.posts))
    .catch(error => console.error(error))
</script>

<div class="slideshow">
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
