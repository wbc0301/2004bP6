<template>
	<div class='index'>
		<ul>
			<li v-for="(item, index) in list" :key="item.id">
				<p @click="handler(index)">{{item.title}}</p>
				<span>商品描述：{{item.desc}}</span>
			</li>
		</ul>

		<detail :obj="currentData" v-if="currentData" ></detail>
	</div>
</template>

<script>
import axios from "axios";
import detail from "./detail";

export default {
	components: { detail },
	data() {
		return {
			list: [],
			currentIndex: 1, // 用户点击的列表的下标
		};
	},
	computed: {
		currentData() {
			return this.list[this.currentIndex];
		},
	},
	mounted() {
		axios({
			url: "/aa.json",
			method: "get",
		}).then((res) => {
			this.list = res.data.list;
		});
	},
	methods: {
		handler(index) {
			this.currentIndex = index;
		},
	},
	component: {
		detail,
	},
};
</script>

<style lang='scss' scoped>
.index {
    padding: 8px;
    background: #b9cbff;
	p {
		font-weight: bold;
		cursor: pointer;
		color: blue;
	}
	ul {
		padding: 0px;
	}
	li {
		border: 1px solid black;
		margin: 10px;
		background-color: skyblue;
		list-style: none;
	}
}
</style>
