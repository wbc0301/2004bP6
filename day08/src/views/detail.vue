<template>
	<div class='detail'>
        <myheader title="详情"></myheader>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(item, index) in data.s_pic" :key="index">
				<img :src="item" alt="">
			</van-swipe-item>
		</van-swipe>
		<p>{{data.title}}</p>

		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" dot />
			<van-goods-action-icon icon="cart-o" text="购物车" :badge="$store.getters.allNum" to="/cart" />
			<van-goods-action-icon icon="shop-o" text="店铺" />
			<van-goods-action-button type="warning" text="加入购物车" @click="add" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
	</div>
</template>

<script>
import { Toast } from "vant";
import header from '@/components/header'
export default {
	data() {
		return {
			data: {},
		};
    },
    computed:{},
        components:{myheader: header},
	mounted() {
		// this.data = this.$route.params.data;
		this.data = this.$store.state.detailData;
		console.log(this.$store.state.detailData);
	},
	methods: {
		add() {
			// 加入购物车
			this.$store.commit("addCartList", this.data);
			Toast('添加成功！');
			// Toast.loading({
			// 	message: "加载中...",
            //     forbidClick: false,
            //     duration: 5000
			// });
		},
	},
};
</script>

<style lang='scss' scoped>
.detail {
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
	img {
		width: 100%;
	}
	/deep/ {
		.van-swipe__track {
			height: calc(100vw);
		}
	}
}
</style>
