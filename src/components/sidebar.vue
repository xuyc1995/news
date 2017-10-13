<template>
    <div class="slidebar">
      <ul>
        <li v-for="item in list" @click="changeItem(item.id)"><a href='javascript:;' :class="{active:item.id==chosenId}">{{item.type}}</a></li>
        <li>
          <a href='' id="showmore">
            更多
            <ul>
              <li><a href=''>更多1</a></li>
              <li><a href=''>更多2</a></li>
              <li><a href=''>更多3</a></li>
              <li><a href=''>更多4</a></li>
              <li><a href=''>更多5</a></li>
              <li><a href=''>更多6</a></li>
              <li><a href=''>更多7</a></li>
            </ul>
          </a>
        </li>        
      </ul>
    </div>
</template>

<script>
const tabItems=[
  {
    id:1,
    type:"推荐"
  },
  {
    id:2,
    type:"热点"
  },{
    id:3,
    type:"图片"
  },
  {
    id:4,
    type:"科技"
  },{
    id:5,
    type:"社会"
  },
  {
    id:6,
    type:"娱乐"
  },{
    id:7,
    type:"游戏"
  },
  {
    id:8,
    type:"体育"
  },{
    id:9,
    type:"汽车"
  },
  {
    id:10,
    type:"财经"
  }
]
import bus from '../bus.js'
export default {
    name: 'sidebar',
    data () {
        return {
            list:tabItems,
            chosenId:1
        }
    },
    methods:{
        //改变导航item
        changeItem:function(id){
            this.chosenId=id
            this.$router.push({
                path:"/homepage",
                query:{
                    index:id
                }
            })
            window.location.reload()
        }
    }
}
</script>
