<template>
  <div class="header" :style="{'background':bgcolor,'color':color}">
      <div class="head-left" @click="goback">
          <slot name="h-left">
              <svg-icon icon="arrow-left"></svg-icon>
              <span class="left-text" v-if="backText">{{backText}}</span>
          </slot>
      </div>
      <div class="head-content">
          <slot>
              <span >{{title}}</span>
          </slot>
      </div>
      <div class="head-right">
          <slot name='h-right'></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'my-header',
    props:{
        backText:String,
        color:{
            type:String,
            default:'#000'
        },
        bgcolor:{
            type:String,
            default:'#fff'
        },
        title:{
            type:String,
            default:'Header'
        },
        back:Function,
    },
    methods:{
        goback(){
            if(this.back){
                this.back()
            }else{
                this.$router.back()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/header.scss'

</style>