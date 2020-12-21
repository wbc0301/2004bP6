<template>
	<div id="app">
        <index></index>
	</div>
</template>

<script>
// 1: 引入子组件
// import index from './组件传参/index';
// import index from './生命周期/index';
import index from './作业/index';

export default {
    name: "App",
    data() {
        return {

        }
    },


    // 2: 注册子组件
    components: {
        index,
    },


};
</script>


