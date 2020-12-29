<template>
	<div class="allGoods">
		<top-bar></top-bar>
		<my-head></my-head>
		<div class="topbar">
			<div class="contenner">
				<span>分类:</span>
				<i @click="getAllData" :class="clickAll ? 'active' : ''">全部</i>
				<i v-for="item in category" :key="item.category_id" :class="item.category_id === categoryID ? 'active' : ''" @click="clickCategory(item.category_id)">{{item.category_name}}</i>
			</div>
		</div>
		<div class="box">
			<goods-card :list="Product"></goods-card>
			<div class="page-box">
				<el-pagination background layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="handleCurrentChange"></el-pagination>
			</div>
		</div>
        <login></login><register></register>
	</div>
</template>

<script>
import topBar from "@/components/topBar";
import head from "@/components/head";
import goodsCard from "@/components/goodsCard";
export default {
	name: "allGoods",
	data() {
		return {
			clickAll: true,
			categoryID: '',
			total: 0,
			currentPage: 1,
			pageSize: 10,
			category: [],
			Product: []
		};
	},
	async mounted() {
		// 请求分类
		let res = await this.$axios({ url: "/product/getCategory", method: "post", });
		this.category = res.category;

		this.getAllData();

	},
	methods: {
		clickCategory(id) {
			this.categoryID = id;
            this.clickAll = false;
            this.currentPage = 1;
			this.getData();
		},
		async getData() { // 请求商品数据
			let res = await this.$axios({
				url: "/product/getProductByCategory",
				method: "post",
				data: { categoryID: [this.categoryID], currentPage: this.currentPage, pageSize: this.pageSize }
			});
			this.Product = res.Product;
			this.total = res.total;
		},
		async getAllData() { // 请求所有商品数据
			let res = await this.$axios({
				url: "/product/getAllProduct",
				method: "post",
				data: { categoryID: [], currentPage: this.currentPage, pageSize: this.pageSize }
			});
			this.Product = res.Product;
            this.total = res.total;
			this.clickAll = true;
			this.categoryID = '';
		},
		handleCurrentChange(val) {
			this.currentPage = val;
			this.getAllData();
		}
	},
	components: { topBar, goodsCard, myHead: head },
};
</script>

<style lang='scss' scoped>
.allGoods {
	background-color: #fafafa;
	.topbar {
		background-color: #fff;
		.contenner {
			width: 1200px;
			margin: auto;
			vertical-align: bottom;
			// height: 40px;
			line-height: 30px;
			.active {
				color: #0fa6ff;
			}
            
			span {
				font-weight: bold;
				display: inline-block;
				margin-right: 24px;
			}
			i {
				display: inline-block;
				width: 90px;
				border: 1px solid #eee;
				text-align: center;
				cursor: pointer;
				&:hover {
					color: #0fa6ff;
				}
			}
		}
	}
	.box {
		width: 1200px;
		margin: 40px auto 0;
		.page-box {
			padding: 40px;
			text-align: center;
		}
	}
}
</style>
