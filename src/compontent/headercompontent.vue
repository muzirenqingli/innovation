<template>
    <div class="topbar">
        <img src="../images/top-logo.png" class="logo" />
        <div class="serch-wrap">
            <input type="text" class="serch-text" />
            <button>搜索</button>
        </div>
        <img src="../images/header-faxian.png" class="findicon"/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scope>
    .topbar{ position: fixed; left: 0px; top: 0px; display: inline-block;}
    .logo{ width:25% }
    .serch-wrap{ display: inline-block}
    .findicon{ width: 7%}
</style>

