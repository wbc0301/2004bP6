<template>
	<div class>
		<h1>人员管理</h1>
		<el-form ref="form" :model="form" label-width="80px" :inline="true">
			<el-form-item label="名称">
				<el-input v-model="form.name" placeholder="输入名称"></el-input>
			</el-form-item>

			<el-form-item label="手机号码">
				<el-input v-model="form.mobile" placeholder="输入手机号码"></el-input>
			</el-form-item>

			<el-form-item label="状态">
				<el-select v-model="form.state" placeholder="请选择状态">
					<el-option label="全部" value></el-option>
					<el-option label="启用" value="1"></el-option>
					<el-option label="禁用" value="0"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="search">查询</el-button>
				<el-button type="primary" @click="reset">重置</el-button>
			</el-form-item>
		</el-form>

		<el-button type="primary" @click="del">删除选中</el-button>

		<el-table :data="listShow" style="width: 100%" @selection-change="selectChange">
			<el-table-column type="selection" width="55"></el-table-column>

			<el-table-column prop="nickname" label="学生名称" width="180"></el-table-column>
			<el-table-column prop="mobile" label="电话" width="180"></el-table-column>
			<el-table-column prop="status" label="状态">
				<template slot-scope="scope">
					<span>{{scope.row.status === 1 ? '启用' : '禁用'}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间">
				<template slot-scope="scope">
					<span>{{new Date(scope.row.created_at * 1000).toLocaleString()}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="address" label="操作">
				<template slot-scope="scope">
					<el-button type="primary" size="mini" @click="toDetial(scope.row.uid)">详情</el-button>
					<el-button type="primary" size="mini" @click="delOne(scope.row.uid)">删除</el-button>
					<el-button type="primary" size="mini" @click="edit(scope.row)">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页组件 -->
		<el-pagination background layout="prev, pager, next" :total="list.length" :page-size="pageSize" :current-page="currentPage" @current-change="pageChage"></el-pagination>

		<el-dialog title="提示" :visible.sync="showEdit" width="30%">
			<el-form ref="form" :model="formEdit" label-width="80px">
				<el-form-item label="名字">
					<el-input v-model="formEdit.name"></el-input>
				</el-form-item>
				<el-form-item label="电话">
					<el-input v-model="formEdit.mobile"></el-input>
				</el-form-item>
				<el-form-item label="状态">
					<el-select v-model="formEdit.state" placeholder="请选择状态">
						<el-option label="禁用" value="0"></el-option>
						<el-option label="启用" value="1"></el-option>
					</el-select>
				</el-form-item>
			</el-form>

			<span slot="footer" class="dialog-footer">
				<el-button @click="showEdit = false">取 消</el-button>
				<el-button type="primary" @click="comfirm">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			editingId: '',
			showEdit: false, // 编辑弹窗是否展示
			form: {
				name: '',
				mobile: '',
				state: '',
			},
			formEdit: {
				name: '',
				mobile: '',
				state: '',
			},
			list: [], //所有的数据
			listCopy: [], //所有的数据拷贝
			// listShow: [], // 每页要展示的数据
			pageSize: 5,
			currentPage: 1,
			selectedList: [],
		}
	},
	computed: {
		listShow() {
			let arr = [];
			arr = this.list.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
			return arr;
		}
	},
	methods: {
		search() { // 搜索
			this.form
			let arr = this.listCopy.filter(item => { // 根据用户的搜索条件过滤数组
				return (
					item.nickname.includes(this.form.name) &&
					item.mobile.includes(this.form.mobile) &&
					(this.form.state === '' ? true : (item.status == this.form.state ? true : false))
				)
			})
			this.list = arr;

			/* 
				运算符优先级 有高到底  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
				… === …
				… && …
				… ? … : …
			 */
		},
		reset() { // 重置
			console.log('submit!');
		},
		del() { // 删除
			// this.list.forEach((item, index, arr) => {
			//     this.selectedList.forEach((e, i, arr2) => {
			//         if(item.uid === e.uid) {
			//             arr.splice(index, 1)
			//         }
			//     })
			// })

			for (var i = this.list.length - 1; i > 0; i--) {
				this.selectedList.forEach(item => {
					if ( this.list[i].uid === item.uid) {
						this.list.splice(i, 1)
					}
				})
			}

		},
		selectChange(val) { // 选中项有变化
			// console.log(val)
			this.selectedList = val;
		},
		pageChage(val) { // 页码改变
			// console.log(val)
			this.currentPage = val;
		},
		toDetial(id) { // 去详情页
			this.$router.push({ path: 'detail', query: { id: id } })
		},
		delOne(id) { // 删除单个
			this.list.forEach((item, index, arr) => {
				if (item.uid === id) {
					arr.splice(index, 1)
				}
			});
			this.listCopy.forEach((item, index, arr) => {
				if (item.uid === id) {
					arr.splice(index, 1)
				}
			});
		},
		edit(obj) { // 开始编辑
			console.log(obj)
			this.editingId = obj.uid;
			this.showEdit = true; // 显示弹窗
			// 修改默认值
			this.formEdit.name = obj.nickname
			this.formEdit.mobile = obj.mobile
			this.formEdit.state = obj.status.toString();

		},
		comfirm() { // 确定编辑

			this.list.forEach((item, index, arr) => {
				if (item.uid === this.editingId) { // 这个item就是我们要修改的对象
					item.nickname = this.formEdit.name;
					item.mobile = this.formEdit.mobile;
					item.status = this.formEdit.state;
				}
			})
			this.listCopy.forEach((item, index, arr) => {
				if (item.uid === this.editingId) { // 这个item就是我们要修改的对象
					item.nickname = this.formEdit.name;
					item.mobile = this.formEdit.mobile;
					item.status = this.formEdit.state;
				}
			})

			this.editingId = '';
			this.showEdit = false; // 隐藏弹窗
		}
	},
	mounted() {
		this.$axios({ url: '/list.json', method: 'get', }).then(res => {
			this.list = res.data
			this.listCopy = JSON.parse(JSON.stringify(this.list))
		})
	}
}
</script>

<style lang='scss' scoped>
h1 {
	font-size: 28px;
	font-weight: bold;
	padding-bottom: 20px;
}
</style>
