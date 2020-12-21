<template>
	<div class='movie'>
		<van-tabs v-model="active">
			<van-tab title="一类">
				<product v-for="item in list1" :obj="item" :key="item._id" @click.native="toDetail(item)"></product>
			</van-tab>
			<van-tab title="二类">
				<product v-for="item in list2" :obj="item" :key="item._id" @click.native="toDetail(item)"></product>
			</van-tab>
			<van-tab title="三类">
				<product v-for="item in list3" :obj="item" :key="item._id" @click.native="toDetail(item)"></product>
			</van-tab>
			<van-tab title="四类">
				<product v-for="item in list4" :obj="item" :key="item._id" @click.native="toDetail(item)"></product>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import axios from "axios";
import product from "../components/product";
export default {
	data() {
		return {
			active: 0,
			list1: [],
			list2: [],
			list3: [],
			list4: [],
		};
	},
	mounted() {
		axios({
			url: "/list.json",
			method: "get",
		}).then((res) => {
			this.list1 = res.data.result1;
			this.list2 = res.data.result2;
			this.list3 = res.data.result3;
			this.list4 = res.data.result4;
		});
	},
	methods: {
		toDetail(data) {
			// 编程式导航
			// this.$router.push('/detail') //仅仅是跳转
			this.$router.push({
				// path: "/detail",
				// query: { data }, //通过query 路由传递参数  这种方式数据会在地址栏显示。 刷新参数不会丢失  也可以和name配合使用。

				name: "detail",
				params: { data }, // 这种方式用户刷新页面时，参数就丢失了。必须和name配合使用
			});
		},
	},
	components: {
		product,
	},
};
</script>


