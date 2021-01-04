<template>
    <div class='b'>
        <van-loading type="circular" color="red" size="100px" v-if="show" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style lang='scss' scoped>

</style>
