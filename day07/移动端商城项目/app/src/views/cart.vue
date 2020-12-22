<template>
	<div class='cart'>

		<van-checkbox-group v-model="selectedGoods">
			<van-checkbox :name="item" v-for="(item, index) in $store.state.cartList" :key="item._id">
				<van-card :price="item.price" desc="描述信息" :title="item.title" :thumb="item.pic">
					<template #footer>
						<van-stepper v-model="item.num" @click.native.stop />
						<van-button type="danger" size="mini" @click.native.stop @click="del(index)">删除</van-button>
					</template>
				</van-card>
			</van-checkbox>
		</van-checkbox-group>

		<van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit">
			<van-checkbox v-model="checked">全选</van-checkbox>
		</van-submit-bar>

	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedGoods: [],
			checked: false,
		};
	},
	computed: {
		allPrice() {
			// 计算所有选中的商品的总价格
			let price = 0;
			this.selectedGoods.forEach((item) => {
				price += item.price * item.num * 100;
			});
			return price;
		},
	},
	mounted() {},
	methods: {
		del(index) {
			// this.selectedGoods.splice(index, 1);
		},
		onSubmit() {},
	},
};
</script>

<style lang='scss' scoped>
.cart {
	height: 100vh;
	background-color: #fafafa;
	/deep/ {
		.van-checkbox__label {
			width: 100%;
		}
		.van-checkbox {
			background-color: #fff;
			margin: 10px 0;
		}
		.van-card {
			background: transparent;
		}
		.van-card__footer {
			position: absolute;
			top: 38px;
			right: 10px;
		}
	}
}
</style>
