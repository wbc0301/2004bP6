<template>
	<div id="app">
		<el-container>
			<el-header>
				<el-row>
					<el-col :span="1">
						<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
					</el-col>
					<el-col :span="23">
						<!-- router属性表示menu组件要执行路由跳转 index 值是要跳转的路径  类似以前的to -->
						<el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
							<el-menu-item index="/teacher">老师管理</el-menu-item>
							<el-menu-item index="/student">学生管理</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
			</el-header>
			<el-container>
				<router-view />
			</el-container>
		</el-container>
	</div>
</template>
<script>
export default {
	data() {
		return {
			activeIndex: 'teacher' // 当前激活状态的标签
		}
	},

}

</script>

<style lang="scss" scoped>
#app {
	/deep/ {
		.el-header {
			background-color: #b3c0d1;
			color: #333;
			text-align: center;
			line-height: 60px;
			padding: 0;
		}
	}
}
</style>
