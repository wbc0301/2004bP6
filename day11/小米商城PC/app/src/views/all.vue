<template>
	<div class="all">
		<div class="content">
			<div class="top">
				<span>分类：</span>
				<i @click="getAllData" :class="currentId === 0 ? 'active' : ''">全部</i>
				<i v-for="item in category" :key="item.category_id" @click="getOneData(item.category_id)" :class="currentId === item.category_id ? 'active' : ''">{{item.category_name}}</i>
			</div>
			<div class="main">
				<goods :aa="Product"></goods>
				<div class="page-box">
					<el-pagination layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="currentPage" @current-change="changePage"></el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import goods from '@/components/goods'
export default {
	data() {
		return {
			// 自己模拟数据
			// category: [
			// 	{
			// 		"category_id": 1,
			// 		"category_name": "手机"
			// 	},
			// 	{
			// 		"category_id": 2,
			// 		"category_name": "电视机"
			// 	},
			// 	{
			// 		"category_id": 3,
			// 		"category_name": "空调"
			// 	},
			// 	{
			// 		"category_id": 4,
			// 		"category_name": "洗衣机"
			// 	},
			// 	{
			// 		"category_id": 5,
			// 		"category_name": "保护套"
			// 	},
			// 	{
			// 		"category_id": 6,
			// 		"category_name": "保护膜"
			// 	},
			// 	{
			// 		"category_id": 7,
			// 		"category_name": "充电器"
			// 	},
			// 	{
			// 		"category_id": 8,
			// 		"category_name": "充电宝"
			// 	}
			// ]
			category: [], // 分类的数据
			Product: [],  // 商品数据
			currentId: 0, // 记录用户点击的分类项
			currentPage: 1, // 
			pageSize: 10, // 
			total: 0, // 
		};
	},
	components: { goods: goods },
	mounted() {
		// get 请求的参数传递方式
		// this.$axios({ url: '/product/getCategory', method: 'get', params: { aa: 123, bb: 456 } }).then(res => {
		// 	this.category = res.data.category
		// })

		this.$axios({ url: '/product/getCategory', method: 'post', }).then(res => {
			this.category = res.data.category
		})
		this.getAllData();// 获取全部商品数据
	},
	methods: {

		// 真正请求数据的函数
		getAllDataSend() {
			this.$axios({
				url: '/product/getAllProduct',
				method: 'post',
				data: { categoryID: [], currentPage: this.currentPage, pageSize: this.pageSize } // post 传参数 放到data里边
			}).then(res => {
				this.Product = res.data.Product
				this.total = res.data.total
				this.currentId = 0;
			})
		},

		// 真正请求数据的函数
		getOneDataSend(id) {
			this.$axios({
				url: '/product/getProductByCategory',
				method: 'post',
				data: { categoryID: [id], currentPage: this.currentPage, pageSize: this.pageSize }
			}).then(res => {
				this.Product = res.data.Product
				this.total = res.data.total
				this.currentId = id;
			})
		},

		// click事件处理函数-请求所有数据
		getAllData() { // 获取全部商品数据
			this.currentPage = 1;
			this.getAllDataSend();
		},
		// click事件处理函数-请求分类数据
		getOneData(id) { // 获取分类商品数据
			this.currentPage = 1;
			this.getOneDataSend(id)
		},

		// click事件处理函数-分页页码改变
		changePage(val) {
			this.currentPage = val;
			if (this.currentId === 0) { // 请求全部数据
				this.getAllDataSend()
			} else { // 请求分类数据
				this.getOneDataSend(this.currentId)
			}
		}
	},
};
</script>

<style lang='scss' scoped>
.all {
	background-color: #fafafa;
	.content {
		width: 1200px;
		margin: auto;
		span {
			font-weight: bold;
		}
		i {
			display: inline-block;
			width: 100px;
			text-align: center;
			line-height: 40px;
			border: 1px solid #ccc;
			cursor: pointer;
			&:hover {
				color: #12bdff;
			}
		}
		.active {
			border: 1px solid #12bdff;
			color: #12bdff;
		}
		.main {
			margin-top: 40px;
			.page-box {
				text-align: center;
				padding: 40px 0;
			}
		}
	}
}
</style>
