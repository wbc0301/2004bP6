<template>
	<div class='detail'>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(item, index) in data.s_pic" :key="index">
				<img :src="item" alt="">
			</van-swipe-item>
		</van-swipe>
		<p>{{data.title}}</p>

		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" dot />
			<van-goods-action-icon icon="cart-o" text="购物车" badge="1" to="/cart" />
			<van-goods-action-icon icon="shop-o" text="店铺" />
			<van-goods-action-button type="warning" text="加入购物车" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: {},
		};
	},
	mounted() {
        // this.data = this.$route.params.data;
        this.data = this.$store.state.detailData;
        console.log(this.$store.state.detailData)
	},
	methods: {},
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
