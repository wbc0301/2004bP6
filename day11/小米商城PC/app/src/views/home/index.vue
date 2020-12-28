<template>
	<div class="home">
		<div class="content">
			<div class="carousel-box">
				<el-carousel height="400px">
					<el-carousel-item v-for="item in imgList" :key="item.carousel_id">
						<img :src="item.imgPath" alt />
					</el-carousel-item>
				</el-carousel>
			</div>
            <div class="main">
                <part></part>
                <part></part>
            </div>
		</div>
	</div>
</template>

<script>
import part from './part'
export default {
	data() {
		return {
			imgList: [],
		};
	},
	mounted() {
		this.$axios({
			url: '/resources/carousel',
			method: 'post',
		}).then(res => {
			this.imgList = res.data.carousel
		})
	},
	components: { part },
	methods: {},
};
</script>

<style lang='scss' scoped>
.home {
	.content {
		width: 1200px;
		margin: auto;
		.carousel-box {
			img {
				width: 100%;
			}
			.el-carousel__item h3 {
				color: #475669;
				font-size: 14px;
				opacity: 0.75;
				line-height: 150px;
				margin: 0;
			}

			.el-carousel__item:nth-child(2n) {
				background-color: #99a9bf;
			}

			.el-carousel__item:nth-child(2n + 1) {
				background-color: #d3dce6;
			}
		}
	}
}
</style>
