<template>
	<div class="child">child</div>
</template>

<script>

// 子组件的整个生命周期是在父组件的 beforeMount  和  mounted之间
export default {
	data() {
		return {};
	},
	beforeCreate() {
		console.log('child++++++++', 'beforeCreate')
	},
	created() {
		console.log('child++++++++', 'created')
	},
	beforeMount() {
		console.log('child++++++++', 'beforeMount')
	},
	mounted() {
		console.log('child++++++++', 'mounted')
	},
	methods: {},
};
</script>

<style lang='scss' scoped>
</style>
