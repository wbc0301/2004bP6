<template>
	<div class='movie'>
		<van-tabs v-model="active">
			<van-tab :title="element.title" v-for="(element, index) in list" :key="element.id">
				<!-- <button @click="sortHandler('升', index)">升</button>
				<button @click="sortHandler('降', index)">降</button>
				<button @click="sortHandler('不', index)">不</button> -->

				<product v-for="item in element.arr" :obj="item" :key="item._id" @click.native="toDetail(item)"></product>
			</van-tab>
		</van-tabs>
        <!-- 
            {
                "id": "12389h32489nsd8932h",
                "title": "酒水饮料",
                "arr": [
                    {
                        "_id": "5a68811a70d8fb0ab4f684de",
                        "title": "Swift ios开发视频教程",
                        "cid": "59f1e1ada1da8b15d42234e9",
                        "price": 156,
                        "old_price": "156",
                        "pic": "http://jd.itying.com/upload/aaqJ4TTVpU3sPRqMe2BEn11E.jpg",
                        "s_pic": [
                            "http://jd.itying.com/upload/aaqJ4TTVpU3sPRqMe2BEn11E.jpg_200x200.jpg",
                            "http://jd.itying.com/upload/aaqJ4TTVpU3sPRqMe2BEn11E.jpg_200x200.jpg",
                            "http://jd.itying.com/upload/aaqJ4TTVpU3sPRqMe2BEn11E.jpg_200x200.jpg"
                        ]
                    },
                    {
                        "_id": "5a68813370d8fb0ab4f684df",
                        "title": "iOS开发快速入门视频教程 ",
                        "cid": "59f1e1ada1da8b15d42234e9",
                        "price": 146,
                        "old_price": "146",
                        "pic": "http://jd.itying.com/upload/d1hnKZ-SL1mInecicZpYOVud.jpg",
                        "s_pic": [
                            "http://jd.itying.com/upload/d1hnKZ-SL1mInecicZpYOVud.jpg_200x200.jpg",
                            "http://jd.itying.com/upload/d1hnKZ-SL1mInecicZpYOVud.jpg_200x200.jpg"
                        ]
                    }
                ]
            }
        -->
	</div>
</template>

<script>
import axios from "axios";
import product from "../components/product";
export default {
	data() {
		return {
			active: 0,
			list: [
				// { id: "safsdf23rf", title: "1类", arr: [] },
				// { id: "dsq3efdasv", title: "2类", arr: [] },
				// { id: "dvgq34534f", title: "3类", arr: [] },
				// { id: "sdgat3q466", title: "4类", arr: [] },
            ],
            listCopy: [],
		};
	},
	mounted() {
		axios({
			url: "/list2.json",
			method: "get",
		}).then((res) => {
            this.list = res.data.list
            this.listCopy = JSON.parse(JSON.stringify(this.list))
		});
		// axios({
		// 	url: "/list.json",
		// 	method: "get",
		// }).then((res) => {
		// 	this.list.forEach((item, index) => {
		// 		item.arr = res.data["result" + (index + 1)];
        //     });
        //     this.listCopy = JSON.parse(JSON.stringify(this.list))
		// });
	},
	methods: {
		sortHandler(type, index) {
			if (type === "不") {
                this.list[index].arr = JSON.parse(JSON.stringify(this.listCopy[index].arr))
			} else {
				this.list[index].arr.sort((a, b) => {
					if (type === "升") {
						return a.price - b.price;
					} else {
						return b.price - a.price;
					}
				});
			}
		},
		toDetail(data) {
			// 编程式导航
			// this.$router.push('/detail') //仅仅是跳转
			this.$router.push({
				// path: "/detail",
				// query: { data }, //通过query 路由传递参数  这种方式数据会在地址栏显示。 刷新参数不会丢失  也可以和name配合使用。

				name: "detail",
				params: { data }, // 这种方式用户刷新页面时，参数就丢失了。必须和name配合使用
			});
		},
	},
	components: {
		product,
	},
};
</script>


