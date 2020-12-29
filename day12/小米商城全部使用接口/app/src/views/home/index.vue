<template>
	<div class="home">
		<top-bar></top-bar>
		<my-head></my-head>
		<div class="contener">
			<el-carousel class="carousel-box">
				<el-carousel-item v-for="item in carousel" :key="item.carousel_id">
					<img :src="item.imgPath" alt />
				</el-carousel-item>
			</el-carousel>
			<product :list="goodsList"></product>
			<product :list="goodsList"></product>
		</div>

        <login></login><register></register>

	</div>
</template>

<script>
import topBar from "@/components/topBar";
import head from "@/components/head";
import product from "./product";
export default {
	name: "home",
	data() {
		return {
			carousel: [],
			goodsList: [],
		};
	},
	components: { topBar, product, myHead: head },
	async mounted() {

		// 请求轮播数据
		let res = await this.$axios({ url: "/resources/carousel", method: "post", });
		this.carousel = res.carousel;

		// 请求商品数据
		let res2 = await this.$axios({
			url: "/product/getHotProduct",
			method: "post",
			data: { categoryName: ["电视机","空调","洗衣机","保护套", "保护膜", "充电器", "充电宝"] }
		});
		this.goodsList = res2.Product;

	},
	methods: {},
};
</script>

<style lang='scss' scoped>
.home {
	background-color: #fafafa;
	.contener {
		width: 1200px;
		margin: auto;
		.carousel-box {
			img {
				width: 100%;
			}
			/deep/ {
				.el-carousel__container {
					height: 450px;
				}
			}
		}
	}
}
</style>
