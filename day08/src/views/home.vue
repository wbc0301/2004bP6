<template>
	<div class="home">
		<myheader title="首页"></myheader>
		<van-tabs v-model="active">
			<van-tab v-for="item in list" :key="item.id" :title="item.type">
				<!-- {{item.arr}} -->
				<div class="sort-box">
					<span>综合</span>
					<div @click="sortGoods">
						价格
						<van-icon class="icon up" name="play" :class="{red: sortType === '升序'}" />
						<van-icon class="icon down" name="play" :class="{red:  sortType === '降序'}" />
					</div>
					<span>销量</span>
				</div>
				<van-grid :border="true" :column-num="2">
					<van-grid-item v-for="ele in item.arr" :key="ele._id" @click="toDetail(ele)">
						<img  v-lazy="ele.pic" alt />
						<div class="title">{{ ele.title }}</div>
						<div class="price-box">
							<span class="price">￥{{ ele.price }}</span>
							<del>{{ ele.old_price }}</del>
						</div>
					</van-grid-item>
				</van-grid>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import header from '@/components/header'
export default {
	data() {
		return {
			active: 0,
			list: [],
			listCopy: [],
			sortType: '默认排序',
		};
	},
	mounted() {
		this.$axios({ url: "/list.json", methods: "get" }).then((res) => {
			this.list = res.data.list;
		});
	},
	components: { myheader: header },
	methods: {
		toDetail(ele) {

			this.$store.commit('changeDetailData', ele) // 提交一个mutation 改变vuex 里边的数据

			this.$router.push({
				name: 'detail',
				// params: {data: ele} // 页面刷新的时候 数据会丢失
			})
		},
		sortGoods() { // 价格排序
			if (this.sortType === '默认排序') { // 默认排序
				this.listCopy = JSON.parse(JSON.stringify(this.list)) // 拷贝默认排序的数据
				this.sortType = '升序'
				this.list.forEach(item => {
					item.arr.sort((a, b) => {
						return a.price - b.price
					})
				});
			} else if (this.sortType === '升序') { // 升序
				this.sortType = '降序'
				this.list.forEach(item => {
					item.arr.sort((a, b) => {
						return b.price - a.price
					})
				});
			} else if (this.sortType === '降序') { // 降序
				this.sortType = '默认排序'
				this.list = this.listCopy
			}
		}
	},
};
</script>

<style lang='scss' scoped>
.home {
	/deep/ {
		[class*="van-hairline"]::after {
			border-color: #aaa;
		}
		.van-grid {
			max-height: calc(100vh - 181px);
			overflow: auto;
		}
	}
	img {
		width: 100%;
	}
	.price {
		color: orange;
		font-size: 20px;
		margin-right: 5px;
	}
	.title,
	.price-box {
		width: 100%;
	}
	.sort-box {
		line-height: 40px;
		display: flex;
		justify-content: space-around;
		font-size: 14px;
		border-top: 1px solid #cccc;
		div {
			display: inline-block;
			.icon {
				color: #aaa;
				&.up {
					transform: rotate(-90deg);
				}
				&.down {
					transform: rotate(90deg);
				}
				&.red {
					color: red;
				}
			}
		}
	}
}
</style>
