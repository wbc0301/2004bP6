<template>
    <div class='one'>
        <div class="title">标题</div>
        <!-- 具名插槽，同过name属性给插槽起一个名字 -->
        <slot name="top"></slot>
        <div class="content">
            <ul>
                <li>内容</li>
                <li>内容</li>
                <li>内容</li>
                <li>内容</li>
                <li>内容</li>
                <li>内容</li>
            </ul>
        </div>
        <slot name="bottom"></slot>
        <div class="footer">footer</div>
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
    .one {
        background-color: pink;
        margin: 10px;
        border: 1px solid blue;
    }
</style>
