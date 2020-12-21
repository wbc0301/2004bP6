<template>
	<div class='home'>
		<van-tabs v-model="active">
			<van-tab v-for="item in list" :key="item.id" :title="item.type">
				<!-- {{item.arr}} -->
				<van-grid :border="true" :column-num="2">
					<van-grid-item v-for="ele in item.arr" :key="ele._id" @click="toDetail(ele)">
						<img :src="ele.pic" alt="">
                        <div class="title">{{ele.title}}</div>
                        <div class="price-box">
                            <span class="price">￥{{ele.price}}</span>
                            <del>{{ele.old_price}}</del>
                        </div>
					</van-grid-item>
				</van-grid>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			list: [],
		};
	},
	mounted() {
		this.$axios({ url: "/list.json", methods: "get" }).then((res) => {
			this.list = res.data.list;
		});
	},
	methods: {
        toDetail(ele) {

            this.$store.commit('changeDetailData', ele) // 提交一个mutation 改变vuex 里边的数据

            this.$router.push({
                name: 'detail',
                // params: {data: ele} // 页面刷新的时候 数据会丢失
            })
        }
    },
};
</script>

<style lang='scss' scoped>
.home {
    /deep/ {
        [class*=van-hairline]::after{
            border-color: #aaa;
        }
    }
    img{
        width: 100%;
    }
    .price {
        color: orange;
        font-size: 20px;
        margin-right: 5px;
    }
    .title, .price-box {
        width: 100%;
    }
}
</style>
