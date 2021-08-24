<template>
  <div class="scroll-wrapper">
    <loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
      bottomPullText="上拉加载更多"
      autoFill
    >
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
      <template #top>
        <div class="mint-loadmore-top">加载中</div>
      </template>  
      
      <div slot="bottom" class="mint-loadmore-top"></div>
    </loadmore>
  </div>
</template>

<script>
import { Loadmore } from "mint-ui";
export default {
  name: "scroll-load",
  components: {
    Loadmore
  },
  data(){
    return{
      allLoaded:false
    }
  },
  props: {
    list: {
      type: Array,
      default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 91, 98, 779, 79, 10]
    }
  },
  methods:{
    loadTop(){
      this.allLoaded = true;
    },
    loadBottom(){
      this.allLoaded = true;
    }

  }
};
</script>

<style lang="scss" scoped>
.scroll-wrapper {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  &:after {
    min-height: calc(100% + 1px);
  }

  background-color: grey;
}
</style>