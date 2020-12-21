<template>
	<div class='my'>
		<van-button type="primary">主要按钮</van-button>
		<van-button type="info">信息按钮</van-button>
		<van-button type="default">默认按钮</van-button>
		<van-button type="warning">警告按钮</van-button>
		<van-button type="danger">危险按钮</van-button>

		<hr>

        <div @click="aaa"></div>

        <!-- 组件上监听的事件都是自定义事件，名字可以随便起，如果要监听dom原生的事件 就需要在事件名的后边加上.native -->
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @click.native="onChange">
			<van-swipe-item><img src="/img/1.jpg" alt=""></van-swipe-item>
			<van-swipe-item><img src="/img/2.jpg" alt=""></van-swipe-item>
			<van-swipe-item><img src="/img/3.jpg" alt=""></van-swipe-item>
			<van-swipe-item><img src="/img/4.jpg" alt=""></van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
import { Toast } from 'vant';
export default {
	data() {
		return {};
	},
	mounted() {},
	methods: {
		onChange(index) {
			Toast("当前 Swipe 索引：" + index);
		},
	},
};
</script>

<style lang='scss'>
.my {
    img {
        height: 200px;
    }
}
.my-swipe .van-swipe-item {
	color: #fff;
	font-size: 20px;
	line-height: 150px;
	text-align: center;
	background-color: #39a9ed;
}
</style>
