<template>
	<div class="goods-box">
		<div v-for="(item,index) in list" :key="index" class="goods" @click="toDetail(item)">
            <!-- 当showDel为true时显示删除按钮 -->
			<i v-if="showDel" class="el-icon-close del" @click.stop="del(item.product_id)"></i>
            
			<img v-lazy="item.product_picture" alt />
			<div>{{item.product_name}}</div>
			<div class="gray desc">{{item.product_title}}</div>
			<div>
				<span class="orange">{{item.product_selling_price}}</span>
				<del class="gray">{{item.product_price}}</del>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: "goodsCard",
	props: ['list', 'showDel'],
	data() {
		return {};
	},
	mounted() { },
	computed: {
		...mapState(['user']),
	},
	methods: {
		toDetail(obj) {
			this.$store.commit('changeDetailData', obj)
			this.$router.push('/detail')
		},
		del(id) { // 删除收藏
			this.$axios.post(
				'/user/collect/deleteCollect',
				{ "user_id": this.user.user_id, "product_id": id }
			).then(res => {
				this.$emit('refresh');// 调用父组件的方法刷新数据
				this.$notify({ title: '成功', message: res.msg, type: 'success' });
			})
		},
	},
};
</script>

<style lang='scss' scoped>
.goods-box {
	.goods {
		cursor: pointer;
		background-color: #fff;
		width: 200px;
		height: 300px;
		margin: 0 12px 12px 0;
		transition: all 0.3s;
		text-align: center;
		padding: 8px;
		display: inline-block;
		vertical-align: top;
		position: relative;
		.del {
			position: absolute;
			text-align: right;
			right: 0px;
			color: rgb(92, 87, 87);
			padding: 10px;
			&:hover {
				color: orange;
			}
		}
		&:hover {
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
			transform: translate3d(0, -2px, 0);
		}
		img {
			width: 150px;
		}
		.gray {
			color: #aaa;
		}
		.orange {
			color: orange;
			font-size: 18px;
			margin-right: 4px;
		}
		.desc {
			padding: 12px 0;
		}
	}
}
</style>
