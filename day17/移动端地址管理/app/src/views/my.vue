<template>
	<div class="my">
		<myheader title="我的"></myheader>
		用户名称:{{$store.state.name}}
		<hr />
		<p></p>
		<van-button type="info" @click="logout" size="large">退出</van-button>
	</div>
</template>

<script>
import header from '@/components/header'
import { Toast } from 'vant'
export default {
	data() {
		return {};
	},
	mounted() {
		console.log(this.$store.state)
	},
	components: { myheader: header },
	methods: {
		logout() {
			this.$cookie.delCookie('isLogin');
            Toast('退出登录成功')
            this.$router.push('/login')
		}
	},
};
</script>

<style lang='scss' scoped>
.my {
	padding: 0px 0 20px;
}
</style>
