<template>
	<div class="cart">
		<myheader title="购物车"></myheader>
		<van-checkbox-group v-model="selectedGoods" ref="checkboxGroup">
			<van-checkbox :name="item" v-for="(item, index) in $store.state.cartList" :key="item._id">
				<van-card :price="item.price" desc="描述信息" :title="item.title" :thumb="item.pic">
					<template #footer>
						<van-stepper v-model="item.num" @click.native.stop />
						<van-button type="danger" size="mini" @click.native.stop @click="del(index, item._id)">删除</van-button>
					</template>
				</van-card>
			</van-checkbox>
		</van-checkbox-group>

		<!-- <div ref="aa">我是一个divaa</div>
		<div ref="bb">我是一个divbb</div>-->

		<van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit">
			<van-checkbox v-model="checked" @click="allCheck">全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>

import header from '@/components/header'
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
	components: { myheader: header },
	mounted() {
		// console.log(this.$refs.aa.innerHTML)
		// console.log(this.$refs.bb)
	},
	methods: {
		del(index, _id) { // 删除购物车中的商品

			this.selectedGoods.forEach((item, i) => { // 1：从selectedGoods删除数据
				if (item._id === _id) { // 通过ID判断要删除的商品
					this.selectedGoods.splice(i, 1);
				}
			})

			this.$store.commit('delCartData', index); // 2：从 cartList删除数据
		},
		allCheck() {
			this.$refs.checkboxGroup.toggleAll(this.checked);
		},
		onSubmit() { },
	},
	watch: {
		selectedGoods(newValue, oldValue) { // 监听selectedGoods的变化
			// alert(newValue.length)
			if (newValue.length != this.$store.state.cartList.length) {
				this.checked = false;
			} else {
				this.checked = true;
			}
		}
	}
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
