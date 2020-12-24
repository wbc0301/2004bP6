<template>
    <div class='one'>
        当前的数量是：<span>{{$store.state.num}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            str: 'abc'
        };
    },
    mounted() {
        console.log(this.$store.state.num)
    },
    methods: {},
};
</script>

<style lang='scss' scoped>
.one {
    margin: 10px;
    border: 1px solid #ccc;
    background: skyblue;
}
</style>
