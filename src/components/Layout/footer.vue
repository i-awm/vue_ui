<template>

      <ul class="layout-footer">
          <router-link class="item" v-for="(item,index) in tabs" :key="'tab_'+index" :to="item.path" exact-active-class="active" >
              <svg-icon class="svg-icon" :icon="item.icon"></svg-icon>
              <p>{{item.name}}</p>
          </router-link>
      </ul>
 
</template>

<script>
export default {
    name:'my-footer',
    data(){
        return{
            tabs:[
                {name:'首页',icon:'home',path:'/'},
                {name:'消息',icon:'msg',path:'/msg'},
                {name:'热门',icon:'type',path:'/hot'},
                {name:'我的',icon:'person',path:'/user'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/footer.scss';
</style>