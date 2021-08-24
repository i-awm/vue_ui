<template>
  <div class="search-wrap">
      <slot name="h-left"></slot>
      <div class="search-block">
          <icon class="mintui" name="search" @click.stop="onSearch"/>
          <input v-bind="$attrs" type="text" class="in" v-model="searchText" :placeholder="placeholderIn">
          <span class="clearText" @click="onClear"> <svg-icon  v-if="searchText"   icon="close"  style="color:#ccc"></svg-icon></span>
      </div>
      <span class="clearText" v-if="searchText" @click="onSearch" >确定</span>
      <slot name="h-right"></slot>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
    name:'search',
    components:{
        Icon
    },
    props:{
        placeholderIn:{
            type:String,
            default:'请输入搜索内容'
        }
    },
    data(){
        return {
            searchText:''
        }
    },
    methods:{
        onSearch(){
            this.$emit('search', this.searchText);
        },
        onClear(){
            this.searchText = '';
            setTimeout(()=>{
                this.$emit('clear',)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/search.scss'
</style>