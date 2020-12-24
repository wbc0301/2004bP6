<template>
	<div class="result">
		<ul v-if="showList.length">
			<li v-for="item in showList" :key="item.name">
				<h3>名字： {{item.name}}</h3>
				<div>价格： {{item.price}}</div>
				<div>描述： {{item.desc}}</div>
			</li>
		</ul>
		<div v-else>没有搜索到数据</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showList: [],
			list: [
				{ name: '宝马', price: '100万', desc: '开宝马' },
				{ name: '宝骏', price: '7万', desc: '国民车' },
				{ name: '奔驰', price: '110万', desc: '坐奔驰' },
				{ name: '比亚迪', price: '10万', desc: 'Build your dreams!' },
			]
		};
	},
	mounted() {
		// 数组的过滤方法
		let arr = this.list.filter(item => {
			// 当return true 的时候当前这一项 就会被放到filter返回的数组里边
			// return false 时就会被过滤掉
			// return item.name === this.$route.query.str
			return item.name.indexOf(this.$route.query.str) > -1
		})
		this.showList = arr

	},
	methods: {},
};
</script>

<style lang='scss' scoped>
.result {
}
</style>
