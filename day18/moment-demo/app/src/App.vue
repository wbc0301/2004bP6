<template>
	<div id="app">
        购买日期：{{time}}
        <div>{{$moment(time).format('YYYY/MM/DD HH:mm:ss')}}</div>
        <hr>
        <div>{{$moment(time).format('YYYY-MM-DD HH:mm:ss')}}</div>
        <hr>
        <div>{{$moment(time).format('YYYY-MM-DD HH:mm')}}</div>
        <hr>
        <div>{{$moment(time).format('YYYY-MM-DD')}}</div>
        <hr>
        <div>{{$moment(time).format('YYYY年MM月DD')}}</div>
        <hr>
        <div>{{$moment(time).format('YYYY')}}</div>
        <hr>
        <div>{{$moment(time).format('HH:mm:ss')}}</div>
        <hr>
        <div>{{$moment(time).format('YYYY年M月DD')}}</div>
        <hr>
        <div>{{$moment(time).format('YYYY年M月DD 星期d')}}</div>
        <hr>
	</div>
</template>

<script>
// moment官网： http://momentjs.cn/docs/#/displaying/format/
export default {
    data() {
        return {
            time: +new Date() - 2 * 60 * 60 * 1000,
        }
    },
    mounted() {
        this.$moment().format('')
    }
}
</script>

