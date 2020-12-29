<template>
	<div class='order'>
		<top-bar></top-bar>
		<my-head></my-head>
		order
	</div>
</template>

<script>
import topBar from "@/components/topBar";
import head from "@/components/head";
export default {
	name: "order",
	data() {
		return {};
	},
	mounted() {},
	methods: {},
	components: { topBar, myHead: head },
};
</script>





























<style lang='scss' scoped>
.order {
}
</style>
