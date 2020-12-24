<template>
	<div id="app">
       <one></one>
       <two></two>
    </div>
</template>

<script>

import one from '@/components/one'
import two from '@/components/two'

export default {
	name: 'App',
	components: {
        one,
        two,
    }
}
</script>

<style lang="scss">
</style>
