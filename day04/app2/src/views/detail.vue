<template>
	<div class='detail'>
		<van-nav-bar title="详情页" left-text="返回"  left-arrow @click-left="onClickLeft" />
		<!-- <button @click="back">回退</button> -->
        
		<div class="title">{{obj.title}}</div>
		<p>评分：{{obj.rate}}</p>
		<img :src="obj.cover" alt="">

	</div>
</template>

<script>
export default {
	data() {
		return {
			obj: {},
		};
	},
	mounted() {
		this.obj = this.$route.params.data;
	},
	methods: {
		onClickLeft() {
			this.$router.back(); // 回退
		},
		onClickRight() {
			// Toast("按钮");
		},
		back() {
			this.$router.back(); // 回退
			// this.$router.go(-2)
		},
	},
};
</script>

<style lang='scss'>
.detail {
	button {
		float: left;
	}
	text-align: center;
	.title {
		padding-top: 10px;
		font-size: 30px;
		font-weight: bold;
	}
	p {
		padding: 30px;
	}
}
</style>
