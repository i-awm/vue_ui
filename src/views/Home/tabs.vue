<template>
  <div class="tab" ref="tabRef">
    <!-- <router-link
      class="item bg-hover" 
      v-for="(tab,idx) in tabs"
      :key="'tab_'+idx"
      :to="tab.path"
      @click.native="handleClick(idx)"
      exact-active-class="active"
    >
      <span class="txt">{{tab.name}}</span>
    </router-link>-->

    <div
      class="item bg-hover"
      :class="{'active':idx === index}"
      v-for="(tab,idx) in tabs"
      :key="'tab_'+idx"
      :to="tab.path"
      @click="handleClick(idx)"
    >
      <span class="txt">{{tab.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { path: "/", name: "首页" },
        { path: "/index/ask", name: "提问" },
        { path: "/index/advise", name: "建议" },
        { path: "/index/discus", name: "讨论" }
      ],
      isHover: false,
      curIndex: 0
    };
  },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick(index) {
      this.$emit("change-tab", index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/tabs.scss";
</style>