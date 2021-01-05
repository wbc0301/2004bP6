<template>
    <div class=''>
        <p>自定义指令</p>
        名字：<input  type="text" placeholder="请输入名字"><br>
        手机号：<input v-autofocue2 type="text" placeholder="请输入手机号">
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    directives: { // 自定指令 局部 只能在当前组件中使用
        autofocue: {
            inserted(el) {
                // el就是使用这个指令的dom元素
                el.focus()
            }
        },
    }
};
</script>

<style lang='scss' scoped>

</style>
