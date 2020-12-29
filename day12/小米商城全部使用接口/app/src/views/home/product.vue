<template>
	<div class="product">
		<div class="left">
			<img src="/img/1.png" alt />
		</div>
		<div class="right">
            <goods-card :list="list"></goods-card>
			<!-- <div v-for="item in list" :key="item.category_id" class="goods-box">
				<img :src="item.product_picture" alt />
				<div>{{item.product_name}}</div>
				<div class="gray desc">{{item.product_title}}</div>
				<div>
					<span class="orange">{{item.product_selling_price}}</span>
					<del class="gray">{{item.product_price}}</del>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
import goodsCard from '@/components/goodsCard';
export default {
	props: ['list'],
	data() {
		return {};
    },
    components:{goodsCard},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.product {
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	.left {
		width: 300px;
		img {
			width: 100%;
		}
	}
	.right {
		margin-left: 20px;
		width: 880px;
		// display: flex;
		// justify-content: flex-start;
		// align-items: flex-start;
		// flex-wrap: wrap;
		// .goods-box {
		// 	background-color: #fff;
		// 	width: 200px;
		// 	height: 300px;
		// 	margin-right: 12px;
        //     transition: all 0.3s;
        //     text-align: center;
        //     padding:8px;
		// 	&:hover {
		// 		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
		// 		transform: translate3d(0, -2px, 0);
		// 	}
		// 	img {
		// 		width: 150px;
		// 	}
        //     .gray {
        //         color: #aaa;
        //     }
        //     .orange {
        //         color: orange;
        //         font-size: 18px;
        //         margin-right: 4px;
        //     }
        //     .desc {
        //         padding: 12px 0;
        //     }
		// }
	}
}
</style>
