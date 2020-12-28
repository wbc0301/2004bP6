<template>
	<div class="part">
		<div class="left">
			<img src="/img/1.png" alt />
		</div>
		<div class="right">
            <goods :aa="list"></goods>
			<!-- <ul>
				<li v-for="item in list" :key="item.product_id">
					<img :src="item.product_picture" alt />
					<div class="name">{{item.product_name}}</div>
					<div class="intro">{{item.product_title}}</div>
					<div class="price">
						<span>{{item.product_selling_price}}￥</span>
						<del>{{item.product_price}}</del>
					</div>
				</li>
			</ul> -->
		</div>
	</div>
</template>

<script>
import goods from '@/components/goods'
export default {
	data() {
		return {
			list: []
		};
	},
	mounted() {
		this.$axios({
			url: '/product/getHotProduct',
			method: 'post',
			data: { "categoryName": ["电视机", "空调", "洗衣机", "保护套", "保护膜", "充电器", "充电宝"] }
		}).then(res => {
			this.list = res.data.Product
		})
	},
	components: {goods},
};
</script>

<style lang='scss' scoped>
.part {
	display: flex;
	margin-top: 20px;
	background-color: #fafafa;
	padding-top: 12px;
	.left {
		flex: 2;
	}
	.right {
		flex: 5;
		// li {
		// 	display: inline-block;
		// 	width: 200px;
		// 	margin-right: 12px;
		// 	background-color: #fff;
		// 	text-align: center;
		// 	height: 250px;
		// 	vertical-align: text-bottom;
        //     margin-bottom: 12px;
        //     transition: all 0.3s;
        //     padding:0 8px;
		// 	&:hover {
		// 		z-index: 2;
		// 		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
		// 		transform: translate3d(0, -2px, 0);
		// 	}
		// 	img {
		// 		width: 70%;
		// 	}
		// 	.name {
		// 		font-weight: bold;
		// 	}
		// 	.intro {
		// 		color: #999;
		// 		padding: 12px 0;
		// 	}
		// 	.price {
		// 		color: orange;
		// 		font-size: 18px;
		// 		del {
		// 			margin-left: 8px;
		// 			color: #999;
		// 			font-size: 14px;
		// 		}
		// 	}
		// }
	}
}
</style>
