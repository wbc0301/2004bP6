<template>
	<div class="hot">
		<myheader title="热门推荐"></myheader>
		<div style="text-align: right">您好：{{$store.state.name}}</div>
		<hr />
		<ul>
			<li>lkjsfoaueoifjo</li>
			<li>lkjsfoaueoifjo</li>
			<li>lkjsfoaueoifjo</li>
			<li>lkjsfoaueoifjo</li>
			<li>lkjsfoaueoifjo</li>
			<li>lkjsfoaueoifjo</li>
		</ul>
	</div>
</template>

<script>

import header from '@/components/header'
export default {
	data() {
		return {};
	},
	mounted() { },
	methods: {},
	components: { myheader: header },
};
</script>

<style lang='scss' scoped>
.hot {
}
</style>
