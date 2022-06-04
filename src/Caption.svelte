<script>
  import { data, selected } from './store'
</script>

<div>
  <p>{@html $data[$selected]?.excerpt}</p>
</div>

<style>
  div {
    max-width: 600px;
    margin: auto;
    padding: 2rem 1rem 1rem;
    background-color: #222;
    color: white;
    text-align: center;
    line-height: 1.5em;
  }
</style>
