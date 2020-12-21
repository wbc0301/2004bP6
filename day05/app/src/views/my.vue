<template>
	<div class='my'>
		<van-button type="primary" @click="logout">退出</van-button>

		<hr>

		<!-- 组件上监听的事件都是自定义事件，名字可以随便起，如果要监听dom原生的事件 就需要在事件名的后边加上.native -->
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @click="onChange">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>

		<van-swipe class="my-swipe" :autoplay="30000" indicator-color="white">
			<van-swipe-item v-for="item in 4" :key="item">
				<img src="http://jd.itying.com/upload/iPrQ_-r43nGjFyxYXiMZWTM6.jpg" alt="" style="width:100%;">
			</van-swipe-item>
		</van-swipe>

		<router-view />

	</div>
</template>

<script>
import { Toast } from "vant";
export default {
	data() {
		return {};
	},
	mounted() {
		console.log(this);
	},
	methods: {
		onChange(index) {
			Toast("当前 Swipe 索引：" + index);
		},
		logout() {
			// 退出登录
			this.$cookie.delCookie("loginStatus");
			this.$router.push("/login");
		},
	},
};
</script>

<style lang='scss'>
.my-swipe .van-swipe-item {
	color: #fff;
	font-size: 20px;
	line-height: 150px;
	text-align: center;
	background-color: #39a9ed;
}
</style>
