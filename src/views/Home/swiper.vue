<template>
  <div class="index_content">
     <scroll-load>
          <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
          </ul>
        </scroll-load>
    <!-- <swipe class="my-swipe" :initial-swipe="index" @change="handleChange">
      <swipe-item>
        <scroll-load>
          <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
          </ul>
        </scroll-load>
      </swipe-item>
      <swipe-item>
        <div style="wdith:100%;height:200px;background-color:blue;"></div>
      </swipe-item>
      <swipe-item>3</swipe-item>
      <swipe-item>4</swipe-item>
    </swipe> -->
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  name: "swiper",
  components: {
    Swipe,
    SwipeItem
  },
  created() {
    for (let i = 0; i < 100; i++) {
      this.list.push(i);
    }
  },
  data() {
    return {
      list: []
    };
  },
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleChange(index) {
      this.$emit("change-tab", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.index_content {
  width: 100%;
  .my-swipe {
    width: 100%;
    min-height: 100%;
    border: 1px solid red;
  }
}
</style>