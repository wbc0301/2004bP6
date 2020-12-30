<template>
	<div class="teacher">
		<el-container>
			<el-container>
				<el-aside width="200px">
					<el-menu router :default-active="activeIndex" class="el-menu-demo" mode="vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
						<el-menu-item index="/teacher/teacher1">三好老师</el-menu-item>
						<el-menu-item index="/teacher/teacher2">优秀老师</el-menu-item>
						<el-menu-item index="/teacher/teacher3">全能老师</el-menu-item>
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
            activeIndex: '/teacher/teacher1' // 当前激活状态的标签
        };
	},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.teacher {
}
</style>
