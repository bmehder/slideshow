<script>
	import { data, selected } from './store'
</script>

<aside>
	<div>{$selected + 1} / {$data.length}</div>
	<img src="{$data[$selected]?.featured_image}" alt="Student Artwork">
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
	div {
		padding: 8px 12px;
		position: absolute;
		top: 0;
		background-color: rgba(0, 0, 0, 0.8);
		color: #f2f2f2;
		font-size: 12px;
	}
</style>