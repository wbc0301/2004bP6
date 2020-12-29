<template>
	<div class="register">
		<el-dialog title="注册" :visible.sync="$store.state.showRegister" width="22%" center>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<el-form-item prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入账号" prefix-icon="el-icon-user-solid"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" placeholder="请输入密码" type="password" prefix-icon="el-icon-view"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password2" placeholder="请输入密码" type="password" prefix-icon="el-icon-view" @keyup.native.enter="register"></el-input>
				</el-form-item>
			</el-form>

			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="register">注册</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
// form表单属性
// model	表单数据对象
// rules	表单验证规则

// el-form-item属性
// prop  当前表单项需要的验证规则，和rules里边的规则去匹配

import { mapState, mapMutations } from 'vuex'
export default {
	data() {
		return {
			ruleForm: { // <el-form>组件里边要使用到的数据
				name: '',
				password: '',
				password2: '',
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
		// ...mapState({dialogVisible: 'showregister'}),
	},
	mounted() { },
	methods: {
		...mapMutations(['changeShowRegister']),
		register() {
			if (this.ruleForm.password !== this.ruleForm.password2) {
				this.$message({ message: '两次密码不一致！', type: 'error' });
				return;
			}
			this.$refs.ruleForm.validate((isOk, obj) => {
				if (isOk) { // 全部字段校验成功
					// 开始注册
					this.$axios.post('/users/register', { userName: this.ruleForm.name , password: this.ruleForm.password  }).then(res => {
						if (res.code === '001') { // 注册成功
							this.changeShowRegister(false);
							this.$message({ message: res.msg, type: 'success' })
						} else { //注册失败

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
.register {
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
