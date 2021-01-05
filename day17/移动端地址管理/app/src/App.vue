<template>
	<div id="app">
        <!-- 手机号：<input v-autofocue2 type="text" placeholder="请输入手机号"> -->
        <!-- exclude要排除的组件 -->
		<keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<style lang="scss">
</style>
