<template>
	<div class="student">
		<el-container>
			<el-container>
				<el-aside width="200px">
					<el-menu router :default-active="activeIndex" class="el-menu-demo" mode="vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
						<el-menu-item index="/student/student1">上课睡觉</el-menu-item>
						<el-menu-item index="/student/student2">上课迟到</el-menu-item>
						<el-menu-item index="/student/student3">玩儿游戏</el-menu-item>
					</el-menu>
				</el-aside>

				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '/student/student1' // 当前激活状态的标签
		};
	},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.student {
    /deep/ {
        .el-aside {
            background: rgb(84, 92, 100);
            height: calc(100vh - 61px);
        }
    }
}
</style>
