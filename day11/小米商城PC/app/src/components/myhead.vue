<template>
	<div class="myhead">
		<div class="top">
			<div class="content">
                <span v-if="$store.state.userName">您好：{{$store.state.userName}}</span>
				<span v-else @click="login">登录</span>
                
				<router-link tag="span" to="/order">订单</router-link>
				<router-link tag="span" to="/collect">收藏</router-link>
				<router-link tag="span" to="/cart">购物车(10)</router-link>
			</div>
		</div>
		<div class="bottom">
			<img src="/img/logo.png" alt />
			<router-link tag="span" to="/home">首页</router-link>
			<router-link tag="span" to="/all">全部商品</router-link>
			<router-link tag="span" to="/aboutUs">关于我们</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() { },
	methods: {
        login() {
            this.$store.commit('changeShowLogin', true)
        }
    },
};
</script>

<style lang='scss' scoped>
.myhead {
	.top {
		background-color: #686767;
		.content {
			width: 1200px;
			margin: auto;
			line-height: 40px;
			text-align: right;
			span {
				display: inline-block;
				width: 100px;
				text-align: center;
				cursor: pointer;
			}
			.router-link-active {
				color: #fff;
				background-color: orange;
			}
		}
	}
	.bottom {
		width: 1200px;
		margin: auto;
		background-color: #fff;
		text-align: left;
		img {
			width: 200px;
			vertical-align: bottom;
		}
		span {
			display: inline-block;
			width: 100px;
			text-align: center;
			line-height: 60px;
			cursor: pointer;
		}
		.router-link-active {
			color: #12bdff;
			border-bottom: 4px solid #12bdff;
		}
	}
}
</style>
