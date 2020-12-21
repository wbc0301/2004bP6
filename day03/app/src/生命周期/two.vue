<template>
	<div class='two'>
		<h1>这个是two组件</h1>
        姓名：<input type="text"><br>
        手机号：<input type="text"><br>

        <button>提交</button>
	</div>
</template>

<script>


export default {
	data() {
		return {

		};
	},
	beforeCreate() {
		console.log("beforeCreate");

	},
	created() {
		console.log("created");
	},
	beforeMount() {
		console.log("beforeMount");
	},
	mounted() {
        console.log("mounted");

    },
    
	beforeDestroy() {
		console.log("two---beforeDestroy");
	},
	destroyed() {
		console.log("two---destroyed");
    },
    
    activated() { // 使用keep-alive时组件被激活时调用
        console.log('activated')
    },
    deactivated() { // 使用keep-alive时组件被失活时调用
        console.log('deactivated')
    },

	methods: {},
};
</script>

<style lang='scss'>
.two {
    background-color: skyblue;
}
</style>