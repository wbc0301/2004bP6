<template>
	<div class='detail'>
		<van-nav-bar title="详情页" left-text="返回" left-arrow @click-left="onClickLeft" />
        
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="item in obj.s_pic" :key="item">
                <img :src="item" alt="" style="width:100%;">
            </van-swipe-item>
		</van-swipe>

		<!-- <button @click="back">回退</button> -->
		<div class="title">{{obj.title}}</div>
		<p>价格：{{obj.price}}</p>
		<!-- <img :src="obj.pic" alt=""> -->


	</div>
</template>

<script>
import { Toast } from "vant";
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
		back() {
			this.$router.back(); // 回退
			// this.$router.go(-2)
		},
		onClickLeft() {
			this.$router.back(); // 回退
		},
	},
};
</script>

<style lang='scss'>
.detail {
    .my-swipe {
        height: 100vw;
    }
    img {
        width: 100%;
    }
	.title {
		padding-top: 10px;
		font-size: 20px;
		font-weight: bold;
	}
}
</style>
