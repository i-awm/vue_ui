<template>
  <layout>
      <search></search>
      <tabs :index="curIndex" @change-tab="handleChange"></tabs>
      <my-scroll @top-load='topLoad' @bottom-load='bottomLoad'>
        <list-item :list="list"></list-item>
      </my-scroll>
      <!-- <swiper :index="curIndex" @change-tab="handleChange"></swiper> -->
      <router-view></router-view>
  </layout>
</template>

<script>
import Tabs from './tabs.vue'
import Swiper from './swiper.vue'
import ListItem from './listItem.vue'
export default {
    name:'Home',
    components:{
        Tabs,
        Swiper,
        ListItem
    },
    data(){
      return{
        tabs:[
        { path: "/", name: "首页" },
        { path: "/index/ask", name: "提问" },
        { path: "/index/advise", name: "建议" },
        { path: "/index/discus", name: "讨论" }
      ],
      curIndex:0,
      height:300,
      list:[{
        _id:1,
        name:'admin'
      },{
        _id:2,
        name:'admin'
      },{
        _id:3,
        name:'admin'
      },{
        _id:4,
        name:'admin'
      },{
        _id:5,
        name:'admin'
      }]
      }
    },
    methods:{
      handleChange(index){
        this.curIndex = index;
      },
       topLoad(ref){
        setTimeout(()=>{
          this.list = [{
        _id:1,
        name:'admin1'
      },{
        _id:2,
        name:'admin3'
      },{
        _id:3,
        name:'admin5'
      },{
        _id:4,
        name:'admin6'
      },{
        _id:5,
        name:'admin7'
      }]
          ref.onTopLoaded()
        },2000)
        
      },
      bottomLoad(ref){
        setTimeout(()=>{
          this.list.push({
            _id:this.list.lenght,
            name:'admin'
          })
          ref.onBottomLoaded();
        },2000) 
      }
    }
}
</script>

<style>

</style>