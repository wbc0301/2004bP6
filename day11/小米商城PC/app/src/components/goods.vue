<template>
	<div class="goods">
		<ul>
			<li v-for="item in aa" :key="item.product_id" @click="toDetail(item)">

                <!-- 图片懒加载 -->
				<img v-lazy="item.product_picture" alt />

				<div class="name">{{item.product_name}}</div>
				<div class="intro">{{item.product_title}}</div>
				<div class="price">
					<span>{{item.product_selling_price}}￥</span>
					<del>{{item.product_price}}</del>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    props:['aa'],
	data() {
		return {};
	},
	mounted() { },
	methods: {
        toDetail(obj) {
            this.$router.push('/detail');
            this.$store.commit('changeDetailData', obj);
        }
    },
};
</script>

<style lang='scss' scoped>
.goods {
	li {
		display: inline-block;
		width: 200px;
		margin-right: 12px;
		background-color: #fff;
		text-align: center;
		height: 250px;
		vertical-align: text-bottom;
		margin-bottom: 12px;
		transition: all 0.3s;
        padding: 0 8px;
        cursor: pointer;
		&:hover {
			z-index: 2;
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
			transform: translate3d(0, -2px, 0);
		}
		img {
			width: 70%;
		}
		.name {
			font-weight: bold;
		}
		.intro {
			color: #999;
			padding: 12px 0;
		}
		.price {
			color: orange;
			font-size: 18px;
			del {
				margin-left: 8px;
				color: #999;
				font-size: 14px;
			}
		}
	}
}
</style>
