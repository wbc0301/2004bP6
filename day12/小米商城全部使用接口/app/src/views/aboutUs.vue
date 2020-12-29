<template>
	<div class='aboutUs'>
		<top-bar></top-bar>
		<my-head></my-head>
		关于我们
        <login></login><register></register>
	</div>
</template>

<script>
import topBar from "@/components/topBar";
import head from "@/components/head";
export default {
	name: "aboutUs",
	data() {
		return {};
	},
	mounted() {},
	methods: {},
	components: { topBar, myHead: head },
};
</script>

<style lang='scss' scoped>
.aboutUs {
}
</style>
