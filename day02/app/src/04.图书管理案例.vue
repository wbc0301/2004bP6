<template>
	<div class='bookmanamger'>
		<h1>图书管理</h1>

		<div class="contenter">
			<div class="topbox">
				编号：<input type="text" v-model="addId" :disabled="isEditing">
				名称：<input type="text" v-model="addName">
				<button @click="add" :disabled="notClick">提交</button>
			</div>
			<div class="allnum">
				图书总数： {{bookList.length}}
			</div>
			<ul>
				<li v-for="item in list" :key="item">{{item}}</li>
			</ul>
			<div class="tabbox">
				<table border>
					<tr>
						<th>编号</th>
						<th>名称</th>
						<th>时间</th>
						<th>操作</th>
					</tr>
					<tr v-for="(item, index) in bookList" :key="item.id">
						<td>{{item.id}}</td>
						<td>{{item.name}}</td>
						<td>{{item.time}}</td>
						<td>
							<span @click="edit(index)">修改</span>
							|
							<span @click="del(index)">删除</span>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [1, {a: 12}, 3],
			oldName: "", // 缓存背修改的书的书名
			isEditing: false, // 是否在编辑中
			editIndex: "", // 当前正在编辑的图书的index
			addId: "", // 添加的书的ID
			addName: "", // 添加的书名
			bookList: [
				{
					id: 1,
					name: "三国演义",
					time: new Date().toLocaleString(),
				},
				{
					id: 2,
					name: "水浒传",
					time: new Date().toLocaleString(),
				},
				{
					id: 3,
					name: "红楼梦",
					time: new Date().toLocaleString(),
				},
				{
					id: 4,
					name: "西游记",
					time: new Date().toLocaleString(),
				},
			],
		};
	},
	computed: {
		notClick() {
			// 编辑状态，并且两个名字相等时不能点击
			return this.isEditing && this.addName == this.oldName;
		},
	},
	mounted() {},
	methods: {
		add() {
			let addId = this.addId;
			let addName = this.addName;
			if (!addId || !addName) {
				alert("请填写内容，猪");
				return;
			}
			let obj = {
				id: this.addId,
				name: this.addName,
				time: new Date().toLocaleString(),
			};
			if (this.isEditing) {
				// 在编辑中
				this.bookList[this.editIndex] = obj;
				this.isEditing = false;
				this.editIndex = "";
			} else {
				// 添加图书
				let arr = this.bookList.filter((item) => {
					// 返回一个数组，
					return this.addId == item.id;
				});
				if (!arr.length) {
					this.bookList.push(obj);
				} else {
					alert("ID重复，猪");
					return;
				}
			}

			// 添加后清除输入框的数据
			this.addId = "";
			this.addName = "";
		},
		del(index) { // 删除
			if (this.editIndex == index) {
				// 当前数据正在编辑
				alert("正在编辑呀，猪");
			} else {
				this.bookList.splice(index, 1);
			}
		},
		edit(index) {
			// 编辑
			let obj = this.bookList[index];
			this.addId = obj.id;
			this.addName = obj.name;

			this.oldName = obj.name; // 缓存

			this.isEditing = true;
			this.editIndex = index;
		},
	},
};
</script>

<style lang='scss'>
.bookmanamger {
	text-align: center;
	.allnum {
		margin: 10px;
	}
	.tabbox {
		table {
			margin: auto;
			td span {
				color: blue;
				cursor: pointer;
			}
		}
	}
}
</style>
