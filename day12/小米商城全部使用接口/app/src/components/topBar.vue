<template>
	<div class="topBar">
		<div class="contener">
			<em v-if="!user.userName">
				<span @click="login" class="login">登录</span> | 
				<span @click="register" class="register">注册</span>
			</em>

			<el-popover v-else placement="bottom" width="200" v-model="visible" trigger="hover">
				<p style="padding:12px 0 12px 0;">您确定要退出登录吗？</p>
				<div style="text-align: right; margin: 0">
					<el-button type="text" size="mini" @click="visible = false">取消</el-button>
					<el-button type="primary" size="mini" @click="logout">确定</el-button>
				</div>
				<span slot="reference">欢迎: {{user.userName}}</span>
			</el-popover>

			<router-link tag="span" to="/order">我的订单</router-link>
			<router-link tag="span" to="/collect">我的收藏</router-link>
			<router-link tag="span" to="/cart">购物车({{$store.getters.shoppingCartNum}})</router-link>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	name: "topBar",
	data() {
		return {
			visible: false,
		};
	},
	computed: {
		...mapState(['user'])
	},
	mounted() { },
	methods: {
		...mapMutations(['changeUser', 'changeShowLogin', 'changeShowRegister']),
		login() { // 登录
			this.changeShowLogin(true);
		},
		register() { // 注册
			this.changeShowRegister(true);
		},
		logout() { // 登出
            this.changeUser({});
            if(this.$route.path !== '/home') {
                this.$router.push('/home')
                this.$message({message: '退出成功，跳转到首页', type: 'success'})
            }
		},
	},
};
</script>

<style lang='scss' scoped>
.topBar {
	background-color: #3d3d3d;
	.contener {
		width: 1200px;
		margin: auto;
		text-align: right;
		line-height: 40px;
		color: #eee;
		.login,
		.register {
			cursor: pointer;
			&:hover {
				color: #409eff;
			}
		}
		.router-link-active {
			background-color: orange;
			color: #333;
		}
		span {
			display: inline-block;
			width: 120px;
			text-align: center;
			cursor: pointer;
		}
        em span {
            width: 50px;
        }
	}
}
</style>
