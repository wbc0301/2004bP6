<template>
	<div id="app">
        <!-- exclude要排除的组件 -->
		<keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<style lang="scss">
</style>
