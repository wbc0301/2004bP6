<template>
    <div class='one'>
        <h3>子组件1: 我负责操作</h3>
        <div>
            数量：
            <button @click="handler2">-</button>
            {{abc}}
            <button @click="handler1">+</button>

        </div>
    </div>
</template>

<script>
export default {
    props: ['abc'],
    data() {
        return {
            msg: '我是one'
        };
    },
    mounted() {},
    methods: {
        handler1() {
            this.$emit('change', 1)
        },
        handler2() {
            this.$emit('aaaaa', -1)
        },
    },
};
</script>

<style lang='scss'>
.one {
    background: skyblue;
    padding: 12px;
}
</style>
