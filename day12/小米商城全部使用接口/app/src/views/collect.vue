<template>
	<div class="collect">
		<top-bar></top-bar>
		<my-head></my-head>
		<div class="collect-title">
			<div class="text">我的收藏</div>
		</div>
		<div class="box">
			<goods-card :list="list" :showDel="true" @refresh="getList"></goods-card>
		</div>
	</div>
</template>

<script>
import topBar from "@/components/topBar";
import head from "@/components/head";
import goodsCard from "@/components/goodsCard";
export default {
	name: "collect",
	data() {
		return {
			list: [],
		};
	},
	mounted() {
		this.getList()
	},
	methods: {
		async getList() {
			// let res = await this.$axios({ url: "/user/collect/getCollect ", method: "post", data: {user_id: this.$store.state.user.user_id}});
			// this.list = res.collectList;
			let res = await this.$axios.post('/user/collect/getCollect', { user_id: this.$store.state.user.user_id });
			this.list = res.collectList;
		}
	},
	components: { topBar, myHead: head, goodsCard },
};
</script>

<style lang='scss' scoped>
.collect {
	background-color: #fafafa;
	.collect-title {
		background-color: #fff;
		font-size: 18px;
		padding: 20px 0 10px;
		border-bottom: 2px solid orange;
		.text {
			width: 1200px;
			margin: auto;
		}
	}
	.box {
		width: 1200px;
		margin: 40px auto;
	}
}
</style>
