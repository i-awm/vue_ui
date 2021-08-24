<template>
  <svg class="svg-icon-base" :class="[exClass]" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
// 把所有svg 资源 加入到一个 svg面板中
export default {
  name: "svg-icon",
  props: {
    exClass: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName: function() {
      return `#icon-${this.icon}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon-base {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>