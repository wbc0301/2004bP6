<template>
	<div class="dh">
		<van-sidebar v-model="activeKey" @change="change">
			<van-sidebar-item title="标签a" :dot="flag" />
			<van-sidebar-item title="标签b" />
			<van-sidebar-item title="标签c" />
		</van-sidebar>
        <div>
            <router-view></router-view>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            activeKey: 0,
            flag: true,
            arr: ['a', 'b', 'c']
        };
	},
	mounted() { },
	methods: {
        change(index){
            this.$router.push('/dh/' + this.arr[index])
        }
    },
};
</script>

<style lang='scss' scoped>
.dh {
    display: flex;
}
</style>
