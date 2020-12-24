<template>
	<div class="home">
		<van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
			<template #action>
				<div @click="onSearch">搜索</div>
			</template>
		</van-search>
		<button @click="del">删除</button>
		<ul class="history">
			<li v-for="(item, index) in wordList" :key="index">{{item}}</li>
		</ul>

		<ul v-if="value" class="search-box">
			<li v-for="(item, index) in searchList" :key="index">{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			wordList: [],
			searchList: [],
			originList: ['奥迪A6', '奥迪A7', '奥迪A4', '奥迪A8', '奥迪TT', '奥迪S6', '奔驰S600', '宝马730', '宝骏730',]
		};
	},
	created() {

		if(localStorage.wordListCopy) {
		    this.wordList = localStorage.wordListCopy.split(',') || []
		}

		// 短路运算
		// this.wordList = localStorage.wordListCopy && localStorage.wordListCopy.split(',')
	},
	methods: {
		del() {
			this.wordList = []; // 清空数组
			// localStorage.wordListCopy = null;
			localStorage.removeItem('wordListCopy')
		},
		onSearch() {
            if(!this.value) {
                alert('猪')
                return
            }
			if (this.wordList.length >= 3) { // 
				this.wordList.unshift(this.value)// 从前边添加
				this.wordList.pop()  // 从后边删除
			} else {
				this.wordList.unshift(this.value)// 从前边添加
			}

			// 数据持久化 
			localStorage.wordListCopy = this.wordList

			this.$router.push({
				path: '/result',
				query: { str: this.value }
			})
		}
	},
	watch: {
		value(newValue, oldValue) {

			let arr = this.originList.filter(item => {
				return item.indexOf(newValue) > -1
			})

			this.searchList = arr;


		}
	}
};
</script>

<style lang='scss' scoped>
.home {
	.history {
		padding-top: 20px;
		li {
			display: inline-block;
			padding: 0 10px;
			border: 1px solid #999;
			background: #eee;
			border-radius: 4px;
			margin: 0 10px;
		}
	}
	.search-box {
		position: absolute;
		top: 54px;
		left: 0;
		right: 0;
		background-color: #fff;
		li {
			padding: 0 10px;
			line-height: 40px;
			border-bottom: 1px solid #ccc;
		}
	}
}
</style>
