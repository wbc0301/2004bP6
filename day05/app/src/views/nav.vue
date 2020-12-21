<template>
	<div id='navpage'>
		<!-- 
            router-link-exact-active 精确匹配路由的类名
            router-link-active       模糊匹配的类名
        -->

		<!-- 有 router-lint 就一定要有一个 router-view -->
		<router-view class="contener" />

		<div class="nav">
			<router-link tag="span" to="/home">首页</router-link>
			<router-link tag="span" to="/movie">电影</router-link>
			<router-link tag="span" to="/my">我的</router-link>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {},
	methods: {},
};
</script>

<style lang='scss'>
.contener {
	height: calc(100% - 60px);
	overflow: auto;
}
#navpage {
	height: 100%;
	.nav {
		position: absolute;
		bottom: 0;
		background-color: pink;
		height: 60px;
		line-height: 60px;
		text-align: center;
		width: 100%;
		display: flex;
		justify-content: space-between;
		span {
			width: 33.3%;
		}
		.router-link-active {
			color: red;
			background: blue;
		}
	}
}
</style>
