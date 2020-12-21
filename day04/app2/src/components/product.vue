<template>
	<div class="product">
		<div>{{obj.title}}</div>
		<p>{{obj.price}}</p>
		<img :src="obj.pic" alt="">
	</div>
</template>

<script>
export default {
    props: ['obj'],
}
</script>
<style scoped lang="scss">
.product {
	text-align: center;
	background: #c9ffeb;
	margin: 8px;
	div {
		padding: 10px 0 10px;
	}
	p {
		padding-bottom: 10px;
	}
	img {
		width: 150px;
	}
}
</style>
