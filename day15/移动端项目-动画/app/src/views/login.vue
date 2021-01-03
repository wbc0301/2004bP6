<template>
	<div class='login'>
		<h3>登 录</h3>

		<van-form @submit="onSubmit">
			<van-field v-model="username" label="用户名" placeholder="用户名" :rules="usernameRules" />
			<van-field v-model="password" type="password"  label="密码" placeholder="密码" :rules="passwordRules" />
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">提交</van-button>
			</div>
		</van-form>

	</div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
            password: "",
            usernameRules: [{ required: true, message: '请填写用户名11' }, {pattern: /^.{3,}$/, message: '用户名必须大于3位！'}],
            passwordRules: [{ required: true, message: '请填写密码' }, {pattern: /^\w{3,}$/, message: '密码必须大于3位！'}]
		};
	},
	mounted() {},
	methods: {
		onSubmit(values) {
            if(this.password === 'admin') { // 登录成功

                this.$store.commit('changeName', this.username)

                this.$router.push('/home')

                // 设置cookie
                this.$cookie.setCookie('isLogin', '1')

            }else{// 登录失败
                alert('用户名或者密码错误')
            }
		},
	},
};
</script>

<style lang='scss' scoped>
.login {
    h3 {
        text-align: center;
    }
}
</style>
