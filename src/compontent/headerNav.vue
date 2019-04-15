<template>
<div>
    <ul>
        <li v-for="item in list" :key="item.path">
            <a :href="item.path">
                {{item.name}}
            </a>
        </li>
    </ul>
</div> 
</template>
<script>
export default {
    data:function(){
        return {
            list:[
                { name:"关注",path:"/forcs"},
                { name:"头条",path:"/firster"},
                { name:"推荐",path:"/tujian"},
                { name:"上海",path:"/sh"},
                { name:"要闻",path:"/news"},
                { name:"青年",path:"/yong"},
                { name:"创新",path:"/innovation"},
            
            ]
        }
    },
    created:function(){

    }
}
</script>
<style lang="less" scoped>
    
</style>


