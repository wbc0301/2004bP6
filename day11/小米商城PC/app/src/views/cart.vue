<template>
	<div class="cart">
		<el-table :data="$store.state.cartList" style="width: 1200px" @selection-change="change">
			<el-table-column type="selection" width="55"></el-table-column>

			<el-table-column prop="product_picture" label="商品图片" width="100">
				<template slot-scope="scope">
					<img :src="scope.row.product_picture" alt />
				</template>
			</el-table-column>

			<el-table-column prop="product_name" label="商品名称" width="280"></el-table-column>
			<el-table-column prop="product_selling_price" label="单价" width="100"></el-table-column>

			<el-table-column prop="num" label="数量" width="200">
				<template slot-scope="scope">
					<el-input-number v-model="scope.row.num" :min="1" :max="10"></el-input-number>
				</template>
			</el-table-column>

			<el-table-column prop="name" label="小计" width="180">
				<template slot-scope="scope">
					<span>{{scope.row.product_selling_price * scope.row.num}}</span>
				</template>
			</el-table-column>

			<el-table-column prop="name" label="操作" width="180">
				<template slot-scope="scope">
					<!-- <i class="el-icon-error"></i> -->

					<el-popconfirm title="确定删除吗？" @confirm="handler(scope.row.product_id, scope.$index)" @cancel="handler2">
                        <i slot="reference" class="el-icon-error"></i>
					</el-popconfirm>


				</template>
			</el-table-column>
		</el-table>

		<div class="bottom-bar">
			<span>共 {{$store.state.cartList.length}}件商品 已选择 {{selectedList.length}}件</span>
			<i>合计：{{allPrice}}</i>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedList: [],
			// tableData: [
			// 	{ date: '2016-05-02', name: '王小虎1', address: '上海市普陀区金沙江路 1518 弄' },
			// 	{ date: '2016-05-04', name: '王小虎2', address: '上海市普陀区金沙江路 1517 弄' },
			// 	{ date: '2016-05-01', name: '王小虎3', address: '上海市普陀区金沙江路 1519 弄' },
			// 	{ date: '2016-05-03', name: '王小虎4', address: '上海市普陀区金沙江路 1516 弄' }
			// ]
		}
	},
	computed: {
		allPrice() {
			let price = 0;
			this.selectedList.forEach(item => {
				price += item.num * item.product_selling_price;
			});
			return price;
		}
	},
	mounted() { },
	methods: {
		change(val) {
			this.selectedList = val;
        },
        handler(id, index) {
            // 要在两个数组中删除数据
            // 1. cartList
            this.$store.commit('delCartList', index);

            // 2. selectedList
            this.selectedList.forEach((item, i, arr) => {
                if(item.product_id === id) {
                    arr.splice(i, 1);
                }
            })

        },
        handler2() {
            alert('我在想想')
        },
	},
};
</script>

<style lang='scss' scoped>
.cart {
	/deep/ {
		.el-table {
			margin: auto;
			img {
				width: 50px;
			}
		}
	}
}
</style>
