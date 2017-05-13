<template>
    <div>
        <h2>{{title}}</h2>
        <h2>hello,请注册</h2>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: "我只是一个注册组件"
            }
        }
    }
</script>

<style scoped>
    h2{
        color: skyblue;
    }
</style>