<template>
	<div class=''>
		<h1>生命周期</h1>
		<!-- tab -->
		<div class="tab">
			<button @click="handler('one')">one</button>
			<button @click="handler('two')">two</button>
		</div>

		<!-- 组件 -->
		<!-- <one v-if="currentComp=== 'one'"></one>
		<two v-if="currentComp=== 'two'"></two> -->

		<!-- 动态组件 -->
		<!-- 动态组件是靠 is 属性决定最终要展示成哪个组件 -->
		<keep-alive include="two"> <!-- keep-alive可以让其内部的组件在失活的时候不是被销毁，而是被缓存起来，所以再次被激活的时候就会保存之前的状态 -->
			<component :is="currentComp" aa="bbbb"></component>
		</keep-alive>

		<!-- <one v-if="flag"></one>
        <two v-else></two> -->

	</div>
</template>

<script>
import One from "../components/one.vue";

import one from "./one";
import two from "./two";

export default {
	data() {
		return {
			currentComp: "one",
		};
	},
	components: {
		one,
		two,
	},

	methods: {
		handler(val) {
			this.currentComp = val;
		},
	},
};
</script>

<style lang='less'>
</style>
