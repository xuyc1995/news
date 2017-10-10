<template>
    <div class='main-container'>
        <div class='sidebar-container'>
            <sidebar></sidebar>
        </div>
        <div class='homepage-right-container'>
            <newslist></newslist>
        </div>
    </div>
</template>
<script>
    import sidebar from '../components/sidebar'
    import newslist from '../components/newslist'
    export default{
        components:{sidebar,newslist}
    }
</script>
