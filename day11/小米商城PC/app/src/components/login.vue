<template>
	<div class="login">
		<!-- visible的值是true时 弹出框展示 -->
		<el-dialog title="登录" center :visible.sync="$store.state.showLogin" width="20%">
			<el-form :model="form" :rules="rules" ref="form">
				<el-form-item prop="name">
					<el-input prefix-icon="el-icon-user-solid" v-model="form.name" autocomplete="off" placeholder="请输入用户"></el-input>
				</el-form-item>

				<el-form-item prop="password">
					<el-input type="password" show-password prefix-icon="el-icon-view" v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
				</el-form-item>
			</el-form>

			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="login">登 录</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// showLogin: true,
			form: {
				name: '',
				password: '',
			},
			rules: { // 校验规则
				name: [
					{ required: true, message: '请输入用户', trigger: 'blur' },
					{ pattern: /^[a-zA-Z]\w{4,15}$/, message: '字母开头允许数字字母下划线5-16位', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ pattern: /^[a-zA-Z]\w{4,15}$/, message: '字母开头允许数字字母下划线5-16位', trigger: 'blur' }
				],
			}
		};
	},
	mounted() { },
	methods: {
		login() { // 登录
			// 当所有表单项都通过验证后，val就会是一个true 否则就是false
			this.$refs.form.validate(val => {
                if (val) { // 当所有表单项都通过验证
                
                    // 如果不用请求接口只这样写就可以了
                    // this.$store.commit('changeUserName', this.form.name)

					this.$axios({
						url: '/users/login',
						method: 'post',
						data: { userName: this.form.name, password: this.form.password },
					}).then(res => {
						if (res.data.code === '001') { // 登录成功
                            this.$store.commit('changeUserName', res.data.user.userName)
                            this.$message({ message: res.data.msg, type: 'success' });
                            this.$store.commit('changeShowLogin', false);
						} else {
							this.$message({ message: res.data.msg, type: 'error' });
						}
					})
				}
			})
		}
	},
};
</script>

<style lang='scss' scoped>
.login {
	.dialog-footer {
		button {
			width: 100%;
			display: inline-block;
		}
	}
}
</style>
