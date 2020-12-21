<template>
	<div class=''>
		<div>姓：{{firstName}}</div>
		<div>名：{{lastName}}</div>
		<!-- 计算属性 -->
		<div>全名：{{fullName}}</div>
		<div>全名：{{fullName}}</div>
		<div>全名：{{fullName}}</div>

		<hr>
		<!-- methods -->
		<div>全名：{{handler()}}</div>
		<div>全名：{{handler()}}</div>
		<div>全名：{{handler()}}</div>

		<button @click="handler1">改姓</button>
		<button @click="handler2">改名</button>

        <!--  -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			firstName: "姚",
			lastName: "明",
		};
	},
	computed: {
		// 计算属性是一个函数，他依赖一些data里边的数据，通过计算后返回一个数据。我们使用的是返回的数据。
		// 计算属性有缓存的功能，就是页面中多次使用，函数也仅仅只调用一次。
		fullName() {
			console.log("computed");
			return this.firstName + this.lastName;
		},
	},
	mounted() {},
	methods: {
		handler1() {
			this.firstName = "潘";
		},
		handler2() {
			this.lastName = "长江";
		},

		handler() {
			console.log("methods");
			return this.firstName + this.lastName;
		},
	},
	watch: {
		// watch可以监听一个数据的改变，如果这个数据变了，函数就会被执行，同时新旧数据会分别以参数的形式传入。
		firstName(newValue, oldValue) {
			console.log("firstName---watch");
		},
		lastName(newValue, oldValue) {
			console.log("lastName---watch");
		},
	},
};
</script>

<style lang='less'>
</style>
