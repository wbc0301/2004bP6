<template>
	<div id="app">
		<myhead></myhead>
		<router-view />
	</div>
</template>

<script>
import myhead from '@/components/myhead';
export default {
	components: { myhead }
}
</script>

<style lang="scss">
</style>
