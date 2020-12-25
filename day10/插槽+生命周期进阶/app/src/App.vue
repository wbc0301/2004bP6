<template>
    <div class='app'>
        
        <one></one>
        <child></child>
        <one>
            <template v-slot:top>
                <div>{{msg}}</div>
            </template>
            <template v-slot:bottom>
                123
            </template>
        </one>
    </div>
</template>

<script>
// 子组件的整个生命周期是在父组件的 beforeMount  和  mounted之间
import child from './views/child'
import one from './views/one'
export default {
    data() {
        return {
            msg:'我是插进来的东西'
        };
    },
    beforeCreate() {
        console.log('app-------','beforeCreate')
    },
    created() {
        console.log('app-------','created')
    },
    beforeMount() {
        console.log('app-------','beforeMount')
    },
    mounted() {
        this.msg = '-------'
        console.log('app-------','mounted')
    },
    methods: {},
    components: {child, one},
};
</script>

<style lang='scss' scoped>

</style>
