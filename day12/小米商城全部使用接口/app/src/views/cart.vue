<template>
	<div class="cart">
		<top-bar></top-bar>
		<my-head></my-head>
		<div class="cart-title">
			<div class="text">我的购物车</div>
		</div>
		<div class="box">
			<el-table :data="shoppingCartData" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55"></el-table-column>

				<el-table-column prop="productName" label="商品名称" width="120"></el-table-column>
				<el-table-column prop="price" label="单价" width="120"></el-table-column>
				<el-table-column prop="num" label="数量">
					<template slot-scope="scope">
						<el-input-number v-model="scope.row.num" :min="1" :max="10" @change="handleChange(scope.row)"></el-input-number>
					</template>
				</el-table-column>
				<el-table-column label="小计">
					<template slot-scope="scope">{{ scope.row.price * scope.row.num }}</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-popover placement="bottom" width="200" v-model="scope.row.check" trigger="click">
							<p style="padding:12px 0 12px 0;">确定要删除吗？</p>
							<div style="text-align: right; margin: 0">
								<el-button type="text" size="mini" @click="scope.row.check = false">取消</el-button>
								<el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row.productID)">确定</el-button>
							</div>
							<i slot="reference" class="el-icon-error" ></i>
						</el-popover>
					</template>
				</el-table-column>
			</el-table>
			<div class="bottom-bar">
				<span class="num">
					购买商品 | 共
					<i>{{shoppingCartData.length}}</i> 件商品 已选择
					<i>{{multipleSelection.length}}</i> 件
				</span>
				<span class="price">
					<em>合计：</em>
					<span>{{allPrice}}</span>
					<el-button type="danger" @click="buy">去结算</el-button>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import topBar from "@/components/topBar";
import head from "@/components/head";
import { mapState, mapMutations } from "vuex";

export default {
	name: "cart",
	data() {
		return {
			// tableData: [
			// 	{
			// 		"id": 3073,
			// 		"productID": 1,
			// 		"productName": "Redmi K30",
			// 		"productImg": "public/imgs/phone/Redmi-k30.png",
			// 		"price": 1599,
			// 		"num": 2,
			// 		"maxNum": 5,
			// 		"check": false
			// 	},
			// 	{
			// 		"id": 1233,
			// 		"productID": 2,
			// 		"productName": "Redmi K300",
			// 		"productImg": "public/imgs/phone/Redmi-k30.png",
			// 		"price": 15990,
			// 		"num": 3,
			// 		"maxNum": 5,
			// 		"check": false
			// 	},
			// ],
            multipleSelection: [],
            visible: false,
		};
	},
	computed: {
		...mapState(['user', 'shoppingCartData']),
		allPrice() {
			let all = 0;
			this.multipleSelection.forEach(item => {
				all += item.price * item.num;
			})
			return all;
		}
	},
	methods: {
		...mapMutations(['changeShoppingCartData']),
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		async handleDelete(index, id) {
			this.multipleSelection.forEach((item, i, arr) => { // 在选中的列表中删除数据
				if (item.id === id) {
					arr.splice(i, 1);
				}
			})

			// this.changeShoppingCartData(index); // 删除购物车中数据

			// 用接口删除数据
			await this.$axios.post('/user/shoppingCart/deleteShoppingCart', { user_id: this.user.user_id, product_id: id }).then(res => {
				this.$notify({ title: '成功', message: res.msg, type: 'success' });
			})
			// 删除数据后 重新获取购物车信息
			this.$axios.post('/user/shoppingCart/getShoppingCart', { user_id: this.user.user_id }).then(res => {
				this.$store.commit('changeShoppingCartData', res.shoppingCartData)
			})
		},
		async handleChange(obj) {
			// 发送接口更新数量
			await this.$axios.post('/user/shoppingCart/updateShoppingCart', {
				user_id: this.user.user_id,
				product_id: obj.productID,
				num: obj.num,
			}).then(res => {
				this.$notify({ title: '成功', message: res.msg, type: 'success' });
			})

			// 更新数量后 重新获取购物车信息
			this.$axios.post('/user/shoppingCart/getShoppingCart', { user_id: this.user.user_id }).then(res => {
				this.$store.commit('changeShoppingCartData', res.shoppingCartData)
			})

		},
		buy() {

		}
	},
	components: { topBar, myHead: head },
};
</script>

<style lang='scss' scoped>
.cart {
	background-color: #fafafa;
	padding-bottom: 40px;
	.cart-title {
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
		.bottom-bar {
			height: 60px;
			line-height: 60px;
			background-color: #fff;
			margin: 40px 0;
			padding: 0 24px;
			i {
				color: orange;
			}
			.num {
			}
			.price {
				float: right;
				color: orange;
				em {
					font-size: 12px;
				}
				span {
					font-size: 20px;
				}
				button {
					width: 100px;
					margin: 0 0 0 10px;
				}
			}
		}
	}
}
</style>
