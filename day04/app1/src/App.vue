<template>
	<div id="app">
		<div id="nav">
            <!-- 跳转 -->

            <!-- to: 要跳转到的路由  tag：要渲染成的dom元素 -->
			<router-link tag="span" to="/">首页</router-link> |
			<router-link tag="span" to="/list">列表</router-link> |
			<router-link tag="span" to="/my">我的</router-link>
		</div>

        <!-- 要展示的组件 -->
		<router-view />
	</div>
</template>

<script>
// import axios from 'axios';

// export default {
//     // 使用axios发送ajax请求。
//     mounted() {
//         let p1 = axios({url:  '/aa.json', method: 'get'});

//         p1.then((res)=> {
//             console.log(res.data.list)
//         }, (err)=> {
//             console.log(err)
//         })
        
//     }
// }

</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
