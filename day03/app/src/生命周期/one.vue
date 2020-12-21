<template>
	<div class='one'>
		<h1>这个是one组件</h1>
		<ul>
			<li v-for="item in list" :key="item.id">{{item.name}}----{{item.age}}</li>
		</ul>
        <div id="aa">abc</div>
        <div >{{aa}}</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
    props: ['aa'],
	data() {
		return {
            list: [],
            msg:'123',
            timer: null,
		};
	},
	// beforeCreate() { // this创建前调用
	// 	console.log("beforeCreate");
	// 	console.log(this.msg); // undefind
    // },

	created() { // this创建后调用
        console.log(this.msg);
		console.log("created");
		console.log(document.getElementById('aa'));
		axios({
			// url: "http://localhost:3000/list",
			url: "/aa.json",
			method: "get",
		}).then((res) => {
			console.log(res.data.list)
			this.list = res.data.list;
		});
	},
	// beforeMount() { // dom挂载前调用
	// 	console.log("beforeMount");
	// },
	mounted() { // dom挂载后调用
        console.log("mounted");
        console.log(document.getElementById('aa'));

        this.timer = setInterval(() => {
            console.log('one')
        }, 100)
    },
    
	// beforeDestroy() { // 组件销毁前调用
    //     console.log("one---beforeDestroy");
    //     clearInterval(this.timer)
	// },
	// destroyed() { // 组件销毁前调用
	// 	console.log("one---destroyed");
	// },

	methods: {},
};
</script>

<style lang='scss'>
.one {
    background-color: pink;
}
</style>
