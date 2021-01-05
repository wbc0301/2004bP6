<template>
    <div class='a'>
        <van-count-down  :time="time" @finish="finish" format="HH:mm:ss:SSS" @change="change" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: 60 * 1000
        };
    },
    mounted() {},
    methods: {
        finish() {
            // alert('活动结束了！')
        },
        change() {
            console.log(1)
            // alert('活动结束了！')
        }
    },
};
</script>

<style lang='scss' scoped>

</style>
