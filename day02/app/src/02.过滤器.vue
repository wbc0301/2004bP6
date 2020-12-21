<template>
	<!-- 过滤器 -->
	<div class=''>
		<div>我的幸运日是：{{time | formatDate2}}</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			time: new Date(),
		};
	},
	filters: {
		// 过滤器的作用主要是对数据进行格式上的一些优化
		// 过滤器是一个函数，接收|前边的数据作为参数，函数return一个值，作为过滤后要展示的值。
		// 这是一个局部过滤器，只能在当前组件中使用
		formatDate: function (val) {
			// 2020年12月12日
			let result = "";
			let year = val.getFullYear();
			let month = val.getMonth() + 1;
			let date = val.getDate();
			// result = year + '年' + month + '月' + date;
			result = `${year}年${month}月${date}日`; // ES6 模板字符串
			return result;
		},
	},
	mounted() {},
	methods: {},
};
</script>

<style lang='less'>
</style>
