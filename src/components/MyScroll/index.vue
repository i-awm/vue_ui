<template>
  <div ref="scrollRef" class="scroll-wrapper" :style="{'height':wrapperHeight+'px'}">
    <loadmore ref="loadmore" :topMethod='topMethod' :bottomMethod='bottomMethod'>
      <slot></slot>
    </loadmore>
  </div>
</template>

<script>

export default {
    name:'my-scroll',
    props:{
      distane:{
        type:Number,
        default:100
      }
    },
    data(){
      return{
        wrapperHeight:0
      }
    },
    methods:{
     topMethod(){
       this.$emit('top-load', this.$refs.loadmore)
     },
     bottomMethod(){
       this.$emit('bottom-load', this.$refs.loadmore)
     }
    },
    mounted(){

      let docHeight = document.documentElement.clientHeight; // 100 vh
      let docWidth = document.documentElement.clientWidth; // 100vw
      this.wrapperHeight =  (docHeight - this.$refs.scrollRef.getBoundingClientRect().top - this.distane/750*docWidth);
      // 设计稿   布局视口  
      // 750 px = 100vw docWidth = 100vw
    }
}
</script>

<style lang="scss" scoped>
.scroll-wrapper{

  overflow: scroll; 
  -webkit-overflow-scrolling: touch;
  background-color: #ccc;
 
}
</style>