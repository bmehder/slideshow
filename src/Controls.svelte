<script>
  import { data, selected } from './store'

  const isNotAtBeginning = () => $selected > 0

  const isNotAtEnd = () => $selected < $data.length - 1

  const setSelectedToEnd = () => ($selected = $data.length - 1)

  const setSelectedToBeginning = () => ($selected = 0)

  const setIncrementSelected = () => $selected++

  const setDecrementSelected = () => $selected--

  const setSelectedBackwards = () =>
    isNotAtBeginning() ? setDecrementSelected() : setSelectedToEnd()

  const setSelectedForwards = () =>
    isNotAtEnd() ? setIncrementSelected() : setSelectedToBeginning()

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
