<template>
    <div class='newslist-container'>
        <div class='title'>
            <p>热门头条</p>
        </div>
        <ul class='list'>
            <li v-for='n in lists' @click="goDetail(n)">
                <div class='list-left'>
                    <img src='../assets/heart.png' />
                    <p>12</p>
                </div>
                <div class='list-center'>
                    <h1>this is title</h1>
                    <p>
                        <span class='newslist-typename'>来源 ·</span>
                        <span>Xx网</span>
                        <span class='newslist-typename'>类型 ·</span>
                        <span>青春</span>
                        <span class='newslist-typename'>评论 ·</span>
                        <span>2</span>
                        <span  class='newslist-typename'>2017-10-10</span>
                    </p>
                </div>
                <div class='list-right'>
                    <img src='../assets/img.jpg'>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                lists:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
                chosenItem:''
            }
        },
        mounted(){
            this.getList()
        },
        methods:{
            goDetail:function(n){
                console.log(n)
                this.$router.push({
                    path:'/'+n
                })
            },
            //获取列表
            getList:function(){
                console.log(this.$route.query.index)
            }
        }
    }
</script>