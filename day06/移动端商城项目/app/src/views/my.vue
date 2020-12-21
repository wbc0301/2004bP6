<template>
    <div class='my'>
        用户名称:{{$store.state.name}}
        <hr>
        <button @click="change">修改</button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        console.log(this.$store.state)
    },
    methods: {
        change() {
            this.$store.commit('changeName', 'vue') // 提交一个mutation
        }
    },
};
</script>

<style lang='scss' scoped>
.my {

}
</style>
