<template>
	<div class="head">
		<van-nav-bar
			:title="title"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
	</div>
</template>

<script>
export default {
    props: {
        title: {
            request: false,
            default: '标题',
            type: String,
        }
    },
    // props: ['title'],
	data() {
		return {
        };
	},
	mounted() { },
	methods: {
        onClickLeft() {
            this.$router.back();
        }
    },
};
</script>

<style lang='scss' scoped>
</style>
