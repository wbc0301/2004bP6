<template>
	<div class="login">
		<el-dialog title="登录" :visible.sync="$store.state.showLogin" width="22%" center>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<el-form-item prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入账号" prefix-icon="el-icon-user-solid"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" placeholder="请输入密码" type="password" prefix-icon="el-icon-view" @keyup.native.enter="login"></el-input>
				</el-form-item>
			</el-form>

			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="login">登录</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	data() {
		return {
			ruleForm: { // <el-form>组件里边要使用到的数据
				name: '',
				password: '',
			},
			rules: { // 对每个数据的验证规则
				name: [
					{ required: true, message: '请输入账号', trigger: 'blur' },
					{ pattern: /^[a-zA-Z]\w{4,15}$/, message: '字母开头5-16位字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ pattern: /^[a-zA-Z]\w{4,15}$/, message: '字母开头5-16位字符', trigger: 'blur' }
				],
			}
		};
	},
	computed: {
		// ...mapState({dialogVisible: 'showLogin'}),
	},
	mounted() { },
	methods: {
		...mapMutations(['changeShowLogin']),
		login() {
			this.$refs.ruleForm.validate((isOk, obj) => {
				if (isOk) { // 全部字段校验成功
					// 开始登录
					this.$axios.post('/users/login', { userName: this.ruleForm.name , password: this.ruleForm.password }).then(res => {
						if (res.code === '001') { // 登录成功
                            this.changeShowLogin(false);
                            this.$message({ message: res.msg, type: 'success' })
							this.$store.commit('changeUser', res.user);
							// 登录后 获取购物车信息
							this.$axios.post('/user/shoppingCart/getShoppingCart', { user_id: res.user.user_id }).then(r => {
                                this.$store.commit('changeShoppingCartData', r.shoppingCartData)
                            })
						} else { //登录失败

						}
					})
				}
			});
        },
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!');
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	},
};
</script>

<style lang='scss' scoped>
.login {
	.dialog-footer {
		button {
			width: 100%;
		}
	}
	/deep/ {
		.el-dialog--center .el-dialog__body {
			padding-bottom: 0px;
		}
	}
}
</style>
