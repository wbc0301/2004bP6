<template>
	<div id="app">
        <h1>父组件</h1>
        <div>单价：{{price}}</div>
        <div>数量：{{num}}</div>
        <div>总价：{{allPrice}}</div>


        <!-- 3: 使用子组件 -->
        <one :abc="num" @change="changehandler" @aaaaa="changehandler2" ></one>
        <two :aa="allPrice" bb="123" :cc="price"></two>
	</div>
</template>

<script>
// 1: 引入子组件
import one from './one';
import two from './two';

export default {

    data() {
        return {
            price: 10,
            num: 1,
        }
    },
    computed: {
        allPrice() {
            return this.price * this.num;
        }
    },

    // 2: 注册子组件
    components: {
        one,
        two,
    },

    methods: {
        changehandler(val) {
            if(this.num === 0 && val < 0) {
                alert('已经是0 了，不能再减了')
            }else{
                this.num += val;
            }
        },
        changehandler2(val) {
            if(this.num === 0 && val < 0) {
                alert('已经是0 了，不能再减了')
            }else{
                this.num += val;
            }
        }
    }

};
</script>
<style lang="scss">
    #app {
        background: pink;
        padding: 12px;
    }
</style>

