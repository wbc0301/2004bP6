<template>
	<div class="product">
		<div>{{obj.title}}</div>
		<p>价格：{{obj.price}}</p>
		<img :src="obj.pic" alt="">
	</div>
</template>

<script>
export default {
	name: "product",
	props: ['obj'],
};
</script>

<style scoped lang="scss">
	.product {
		padding: 4px;
		border: 2px solid skyblue;
		margin: 4px;
		background: #b8e4c6;
		div {
			font-size: 20px;
			padding: 5px 0 5px;
		}
		img {
			width: 70px;
		}
	}
</style>
