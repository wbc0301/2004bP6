<template>
	<div id="app">
		<myhead></myhead>
		<router-view />
        <login></login>
	</div>
</template>

<script>
import myhead from '@/components/myhead';
import login from '@/components/login'
export default {
	components: { myhead, login }
}
</script>

<style lang="scss">
</style>
