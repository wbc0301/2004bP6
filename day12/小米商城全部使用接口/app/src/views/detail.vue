<template>
	<div class="detail">
		<top-bar></top-bar>
		<my-head></my-head>
		<div class="detail-title">
			<div class="text">{{detailData.product_name}}</div>
		</div>
		<div class="box">
			<div class="left">
				<img :src="detailData.product_picture" alt />
			</div>
			<div class="right">
				<div class="name">{{detailData.product_name}}</div>
				<div class="desc">{{detailData.product_intro}}</div>
				<div>
					<span>{{detailData.product_price}}￥</span>
					<del>{{detailData.product_selling_price}}</del>
				</div>
				<div class="btn-box">
					<el-button @click="add" type="danger">加入购物车</el-button>
					<el-button @click="collect" type="warning">收藏</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import topBar from "@/components/topBar";
import head from "@/components/head";
import { mapState } from 'vuex'
export default {
	name: "detail",
	data() {
		return {};
	},
	mounted() { },
	methods: {
        async add() { // 加入购物车
		    await this.$axios.post(
				'/user/shoppingCart/addShoppingCart',
				{ "user_id": this.user.user_id, "product_id": this.detailData.product_id }
			).then(res => {
				this.$notify({ title: '成功', message: res.msg, type: 'success' });
			})
			// 加入购物车后 重新获取购物车信息
			this.$axios.post('/user/shoppingCart/getShoppingCart', { user_id: this.user.user_id }).then(r => {
				this.$store.commit('changeShoppingCartData', r.shoppingCartData)
			})
		},
		collect() { // 收藏
			this.$axios.post(
				'/user/collect/addCollect',
				{ "user_id": this.user.user_id, "product_id": this.detailData.product_id }
			).then(res => {
				this.$notify({ title: '成功', message: res.msg, type: 'success' });
			})
		},
	},
	computed: {
		...mapState(['detailData', 'user']),
	},
	components: { topBar, myHead: head },
};
</script>
<style lang='scss' scoped>
.detail {
	background-color: #fff;
	.detail-title {
		background-color: #fff;
		font-size: 18px;
		padding: 20px 0 10px;
		border-bottom: 2px solid orange;
		.text {
			width: 1200px;
			margin: auto;
		}
	}
	.box {
		width: 1200px;
		margin: 40px auto;
		display: flex;
		.left {
			flex: 2;
			img {
				width: 100%;
			}
		}
		.right {
			flex: 3;
			.name {
				font-weight: bold;
				font-size: 20px;
				padding: 10px 0 40px;
			}
			.desc {
				color: #aaa;
				padding: 0 0 100px;
			}
			span {
				font-size: 30px;
				color: orange;
				margin-right: 10px;
			}
			del {
				color: #ccc;
			}
			.btn-box {
				padding: 100px 0;
				text-align: right;
				button {
					width: 200px;
				}
			}
		}
	}
}
</style>
