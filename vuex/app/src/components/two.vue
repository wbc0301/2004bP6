<template>
	<div class="two">
		当前的数量是：
		<span>{{num}}</span>

		<div class="steper">
			<button @click="handler(-1)">-</button>
			<span>{{num}}</span>
			<button @click="handler(1)">+</button>
		</div>

	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
	data() {
		return {
            msg: 'abc'
        };
    },
    computed: {
        aa() {},
        ...mapState(['num'])
    },
	mounted() { },
	methods: {
        ...mapMutations(['changeNum']),
        handler(val) {
            // this.$store.commit('changeNum', val)
            this.changeNum(val)
        }
    },
};
</script>

<style lang='scss' scoped>
.two {
	margin: 10px;
	border: 1px solid #ccc;
	background: pink;
    .steper {
        padding: 20px 10px;
    }
}
</style>
