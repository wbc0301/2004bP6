<template>
	<div class='head'>
		<div class="contener">
			<img src="/img/logo.png" alt="">
			<router-link tag="span" to="/home">首页</router-link>
			<router-link tag="span" to="/allGoods">全部商品</router-link>
			<router-link tag="span" to="/aboutUs">关于我们</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "myHead",
	data() {
		return {
			username: "abc",
			cartNum: 1,
		};
	},
	mounted() {},
	methods: {},
};
</script>

<style lang='scss' scoped>
.head {
	background-color: #fff;
	.contener {
		img {
			vertical-align: -19px;
		}
		padding-top: 10px;
		border-bottom: 1px solid #ccc;
		width: 1200px;
		margin: auto;
		line-height: 80px;
		span {
			display: inline-block;
			width: 100px;
			text-align: center;
			cursor: pointer;
		}
        .router-link-active {
            color:#0fa6ff;
            border-bottom:2px solid #0fa6ff;
        }
	}
}
</style>
