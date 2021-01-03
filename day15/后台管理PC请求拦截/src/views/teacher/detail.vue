<template>
    <div class=''>
        <h1>人员的详情页</h1>
        <div>我的UID是：{{$route.query.id}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang='scss' scoped>
h1 {
    font-size: 30px;
    font-weight: bold;
}
</style>
