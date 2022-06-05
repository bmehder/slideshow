<script>
  import { data, index } from './store'
</script>

<div>{$index + 1} / {$data.length}</div>

<style>
  div {
    padding: 8px 12px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #f2f2f2;
    font-size: 12px;
  }
</style>
