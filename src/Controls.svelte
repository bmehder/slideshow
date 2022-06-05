<script>
  import { data, index } from './store'

  const isIndexNotAtBeginning = () => $index > 0

  const isIndexNotAtEnd = () => $index < $data.length - 1

  const setIndexToEnd = () => ($index = $data.length - 1)

  const setIndexToBeginning = () => ($index = 0)

  const setIndexIncrement = () => $index++

  const setIndexDecrement = () => $index--

  const goBackwards = () => (isIndexNotAtBeginning() ? setIndexDecrement() : setIndexToEnd())

  const goForwards = () => (isIndexNotAtEnd() ? setIndexIncrement() : setIndexToBeginning())

  const handleClick = direction => (direction === 'prev' ? goBackwards() : goForwards())

  const handleKeydown = e => {
    e.key === 'ArrowLeft' && goBackwards()
    e.key === 'ArrowRight' && goForwards()
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
