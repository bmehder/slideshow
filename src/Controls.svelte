<script>
  import { data, selected } from './store'

  const isAtEnd = () => $selected < $data.length - 1

  const isAtBeginning = () => $selected > 0

  const setSelectedForwards = () => (isAtEnd() ? $selected++ : ($selected = 0))

  const setSelectedBackwards = () =>
    isAtBeginning() ? $selected-- : ($selected = $data.length - 1)

  const handleClick = direction =>
    direction === 'prev' ? setSelectedBackwards() : setSelectedForwards()

  const handleKeydown = e => {
    e.key === 'ArrowLeft' && setSelectedBackwards()
    e.key === 'ArrowRight' && setSelectedForwards()
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<span class="prev" on:click={() => handleClick('prev')}>&#10094;</span>
<span class="next" on:click={() => handleClick('next')}>&#10095;</span>

<style>
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
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
  .prev:hover,
  .next:hover {
    background-color: #307ad5;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
</style>
