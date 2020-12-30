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
					<el-option label="全部" value=''></el-option>
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
					<el-button type="primary" size="mini">详情</el-button>
					<el-button type="primary" size="mini">删除</el-button>
					<el-button type="primary" size="mini">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
        <!-- 分页组件 -->
		<el-pagination background layout="prev, pager, next" :total="list.length" :page-size="pageSize" :current-page="currentPage" @current-change="pageChage"></el-pagination>

	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
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
            arr = this.list.slice((this.currentPage- 1) * this.pageSize, this.currentPage * this.pageSize);
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
			console.log('submit!');
		},
		selectChange(val) { // 选中项有变化
			this.selectedList = val;
		},
		pageChage(val) { // 页码改变
            // console.log(val)
            this.currentPage = val;
		},
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
