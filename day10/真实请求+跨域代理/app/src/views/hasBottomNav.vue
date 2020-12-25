<template>
	<div class="hasBottomNav">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>

		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
			<van-tabbar-item icon="hot-o" to="/hot">热门推荐</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
			<van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
		};
	},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.hasBottomNav {
}
</style>
