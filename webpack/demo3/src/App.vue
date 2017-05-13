<!-- 根组件 -->
<template>
    <div class="msg">
        {{msg}}
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>

        <!-- 组件占位 -->
        <router-view></router-view>
    </div>
</template>

<script>
    // 利用es6语法定义并且导出一个vue对象
    export default {
        data(){
            return {
                msg: "my first-vue file"
        }
        }
    }
</script>

<style scoped>
    .msg {
        color: red;
    }
</style>