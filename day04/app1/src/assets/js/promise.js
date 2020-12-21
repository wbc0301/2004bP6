let p1 = new Promise(function (resolve, reject) { // Promise 的参数会立即被调用（同步）
    
    console.log(1)

    setTimeout(() => {
        console.log(2)
        resolve({code: 1, msg:'成功',list:[]}) // 成功的回调
        // reject({code: 1, msg:'失败',list:[]}) // 失败的回调
    }, 3000)

})

console.log(3)

// promise实例上边有then方法  可以接收两个回调函数，第一个是成功的回调，第二个是失败的回调
p1.then((val) => {
    console.log(4)
    console.log(val)
}, (err) => {
    console.log(err);
})

console.log(5)
