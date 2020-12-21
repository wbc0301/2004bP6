<template>
	<div id="app">
        <!-- 自定义指令 -->
        <input type="text" v-focus1>
	</div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'abc',
        }
    },
    // 局部自定义指令
    directives: {
        // 自定义指令是一个对象，对象名就是指令名，对象可以很多特定的函数，这些函数分别会在特定的时期被调用。
        // inserted函数在dom元素插入后被调用，参数el为使用这个指令的dom元素。 input
        focus1: {
            inserted: function(el) {
                console.log('inserted');
                el.focus();
                el.style.backgroundColor = 'red'
                el.style.fontSize = '30px'
            },
        }
    },
    

};
</script>

<style lang="scss">
    #app {
        font-size: 30px;
    }
</style>

