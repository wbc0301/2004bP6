<template>
	<div class='detail'>
		<h3>{{obj.title}}</h3>
		<div>商品描述：{{obj.desc}}</div>
		<img :src="obj.url" style="width: 160px;">
	</div>
</template>

<script>
export default {
	props: ["obj"],
	data() {
		return {};
	},
	mounted() {},
	methods: {},
};
</script>

<style lang='scss'>
.detail {
	background-color: pink;
    text-align: center;
    h3 {
        text-align: center;
    }
}
</style>
