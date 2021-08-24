<template>
  <div class="layout">
      <slot/>
      <my-footer></my-footer>
  </div>
</template>

<script>
export default {
    name:'layout'
}
</script>

<style lang="scss" scoped>
.layout{
  // padding-bottom: 80px; 
}
</style>