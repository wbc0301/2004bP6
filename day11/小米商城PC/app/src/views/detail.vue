<template>
    <div class='detail'>
        <div class="left">
            <img :src="detailData.product_picture" alt="">
        </div>
        <div class="right">
            <div style="padding: 40px 0; font-size: 30px;">{{detailData.product_name}}</div>
            <div>{{detailData.product_intro}}</div>
            <div style="padding: 40px 0; font-size: 30px; color: orange;">{{detailData.product_selling_price}}</div>
            <el-button style="width:300px;" type="danger" @click="add">添加购物车</el-button>
        </div>
    </div>
</template>

<script>

// 辅助函数
import {mapState, mapMutations} from 'vuex'
export default {
    data() {
        return {};
    },
    // computed: mapState(['detailData']),
    computed: {
        // aa() {
        //     return 123
        // },
        ...mapState(['detailData']) //映射detailData到当前组件
    },
    mounted() {},
    methods: {
        ...mapMutations(['changeCartList']), //映射changeCartList到当前组件
        add() {
            this.detailData.num = 1;
            // this.$store.commit('changeCartList', this.detailData) // 老的写法
            this.changeCartList(this.detailData)  // 使用了映射后的新的写法
        }
    },
};
</script>

<style lang='scss' scoped>
.detail {
    display: flex;
    .left {
        flex: 3;
        img {
            width: 100%;
        }
    }
    .right {
        flex: 5;
    }
}
</style>
