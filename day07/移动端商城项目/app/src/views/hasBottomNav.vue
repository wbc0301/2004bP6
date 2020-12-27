<template>
	<div class="hasBottomNav">
		<transition>
			<!-- <div v-if="aa">dasdfasdfasdfasdfasdfasdfasdfasdfsdfasd</div> -->
			<router-view></router-view>
		</transition>

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
			aa: 1,
		};
	},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.hasBottomNav {
	.v-enter { // 在元素被插入之前生效，在元素被插入之后的下一帧移除。
		transform: translatex(100%);
	}
	.v-enter-active { // 在元素被插入之前生效，在过渡/动画完成之后移除
		transition: all 0.3s;
		position: absolute;
		top: 0px; 
		width: 100%;
	}
	.v-enter-to { // 在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
		transform: translatex(0);
	}

	.v-leave { // 在离开过渡被触发时立刻生效，下一帧被移除
		transform: translatex(0);
	}

	.v-leave-active { // 在离开过渡被触发时立刻生效，在过渡/动画完成之后移除
		transition: all 0.3s;
		position: absolute;
		top: 0px;
		width: 100%;
	}
	.v-leave-to { // 在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除
		transform: translatex(-100%);
	}
}
</style>
