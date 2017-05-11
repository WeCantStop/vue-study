<template>
    <div class="msg">
        {{msg}}
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