<template>
	<div class='two'>
		<h3>子组件2: 我负责展示部分数据</h3>
		<div>总价：{{aa}}</div>
		<div>{{bb}}</div>
	</div>
</template>

<script>
export default {
	props: ["aa", "bb" ],
	data() {
		return {};
	},
	mounted() {},
	methods: {},
};
</script>

<style lang='scss'>
.two {
    margin-top: 20px;
	background: skyblue;
	padding: 12px;
}
</style>
