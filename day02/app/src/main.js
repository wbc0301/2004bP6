import Vue from 'vue'
import App from './01.自定指令.vue'
// import App from './04.图书管理案例.vue'

Vue.config.productionTip = false


/* 全局的自定义指令一定要在 new Vue()之前使用 */
// 1：全局自定义指令 任何组件中都可以使用
// 自定义指令是一个对象，对象名就是指令名，对象可以很多特定的函数，这些函数分别会在特定的时期被调用。
// dom元素插入后调用，参数为当前dom。
Vue.directive('focus2', {
    inserted: function (el) {
        console.log('inserted');
        el.focus();
    },
})

Vue.filter('formatDate2', function (val) {
    // 2020年12月12日
    let result = "";
    let year = val.getFullYear();
    let month = val.getMonth() + 1;
    let date = val.getDate();
    // result = year + '年' + month + '月' + date;
    result = `${year}年${month}月${date}日`; // ES6 模板字符串
    return result;
})

new Vue({
    render: h => h(App),
}).$mount('#app')


// function fn(val) {
//     // 有this
//     console.log(val);
//     return 
// }
// fn('abc')

// // 只有一个参数时可以省略: ()
// let fn2 = (val, val2) => {
//     // 没有 this 也没有arguments
//     console.log(val);
//     console.log(val2);
//     return 
// }
// fn2(1,2)

// // 如果函数仅仅是return一个东西，就可以把return 和{}省掉
// let fn3 = val => val;

// let fn4 = val => {
//     return val
// }

