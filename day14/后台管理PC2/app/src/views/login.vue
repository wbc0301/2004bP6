<template>
	<div class="login">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="用户名" placeholder="请输入用户名">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" placeholder="密码">
				<el-input v-model="form.password"></el-input>
			</el-form-item>
		</el-form>

		<span slot="footer" class="dialog-footer">
			<el-button type="primary" @click="login">登录</el-button>
		</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
            form: {
                name: '',
                password: '',
            }
        };
	},
	mounted() { },
	methods: {
        login() {
            if(this.form.name && this.form.password) {
                alert('OK')
            }
        }
    },
};
</script>

<style lang='scss' scoped>
</style>
