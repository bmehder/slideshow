<script>
  import { data, selected } from './store'

  const goForwards = () => ($selected < $data.length - 1 ? $selected++ : ($selected = 0))

  const goBackwards = () => ($selected > 0 ? $selected-- : ($selected = $data.length - 1))

  const handleClick = direction => (direction === 'prev' ? goBackwards() : goForwards())
</script>

<a class="prev" href="/" on:click|preventDefault={() => handleClick('prev')}>&#10094;</a>
<a class="next" href="/" on:click|preventDefault={() => handleClick('next')}>&#10095;</a>

<style>
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 250px;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    text-decoration: none;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
</style>
