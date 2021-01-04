<template>
	<div class="hasBottomNav">
		<keep-alive>
			<transition>
				<router-view></router-view>
			</transition>
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
	.v-enter { // 进入时
		transform: translateX(100%);
		// opacity: 0;
	}
	.v-enter-active,.v-leave-active { // 进入和离开的过程中
		transition: all 1s;
		position: absolute;
		top: 0;
		width: 100%;
	}
	.v-enter-active { 
        // transition: all 1s 1s;
	}
	.v-leave-to { // 离开后
		transform: translateX(-100%);
		// opacity: 0;
	}
}
</style>
