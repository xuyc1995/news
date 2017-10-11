<template>
    <div class='container'>
        <div class='main-header'>
            <router-link to='/regeister'>注册</router-link>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <a href="javascript:;">登录</a>
        </div>
        <div class='main-container'>
            <div class='sidebar-container'>
                <sidebar></sidebar>
            </div>
            <div class='homepage-right-container'>
                <newslist></newslist>
            </div>
        </div>
    </div>
</template>
<script>
    import sidebar from '../components/sidebar'
    import newslist from '../components/newslist'
    export default{
        components:{sidebar,newslist},
        data(){
            return {

            }
        }
    }
</script>
