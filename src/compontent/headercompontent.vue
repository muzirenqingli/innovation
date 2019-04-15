<template>
    <div class="topbar">
        <img src="../images/top-logo.png" class="logo" />
        <div class="serch-wrap">
            <input type="text" class="serch-text" />
            <button class="serch-btn">搜索</button>
        </div>
        <img src="../images/header-faxian.png" class="findicon" @click="btnClick"/>
    </div>
</template>
<script>
export default {
    methods:{
        btnClick:function(){
            // import("../css/basic.css")
        }
    }
}
</script>
<style lang="less" scope>
    .topbar{ position: fixed; left: 0px; top: 0px; display: inline-block; background: #fff}
    .logo{ width:25%; margin: 10px; float: left;}
    .serch-wrap{ display: inline-block; border-radius: 50px; background: #f2f2f2; margin: 8px 0px; padding: 5px 10px; float: left;
        .serch-text{ border: none; background:none; outline: none}
        .serch-btn{border:none; border-left:1px solid #000; background:none;}
    }
    .findicon{ width: 7%; margin: 10px}
</style>

