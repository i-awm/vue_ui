<template>
  <div class="loadmore">
      
    <div class="loadmore-content" :style="{'transform':transform}">
    <div class="load ignore load-top" v-if="topStatus === 'loading'">加载中1</div>
      <slot></slot>
      
      <div class="load ignore load-bottom" v-if="bottomStatus === 'loading'">加载中....2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loadmore",
  props: {
    maxDistance: {
      type: Number,
      default: 100
    },
    topDistance: {
      type: Number,
      default: 50
    },
    bottomDistance: {
      type: Number,
      default: 50
    },
    bottomMethod: Function,
    topMethod: Function
  },
  data() {
    return {
      eventTarget: null,
      status: "pull| push | loading| ",
      startY: 0,
      translate: 0,
      direction: "",
      startscrollTop: 0,
      bottomReached: false,
      bottomStatus: "",
      topStatus: "",
      docWidth:0
    };
  },
  computed: {
    transform() {
        //  this.translate = this.translate /750 * this.docWidth
    return `translate3d(0px,${this.translate}px,0px)`;
      return `-webkit-translate3d(0px,${this.translate / 750 * this.docWidth}px,0px)`;
    }
  },
  mounted() {
    let docWidth = document.documentElement.clientWidth; // 100vw
    this.docWidth = docWidth;
    this.init();
  },
  methods: {
     
    onTopLoaded() {
      this.translate = 0;
      setTimeout(() => {
        this.topStatus = "pull";
      }, 200);
    },
    onBottomLoaded() {
      this.bottomStatus = "pull";
      this.$nextTick(() => {
        if (this.scrollEventTarget === window) {
          document.body.scrollTop += 50;
        } else {
          this.eventTarget.scrollTop += 50;
        }
        this.translate = 0;
      });
    },
    init() {
      this.eventTarget = this.getScrollEventTarget(this.$el);
      this.bindEvents();
    },
    bindEvents() {
      this.$el.addEventListener("touchstart", this.handleTouchStart);
      this.$el.addEventListener("touchmove", this.handleTouchMove);
      this.$el.addEventListener("touchend", this.handleTouchEnd);
    },
    handleTouchStart(ev) {
      this.startY = ev.touches[0].clientY | 0;
      this.startscrollTop = this.scrollTop(this.eventTarget) | 0;
    },
    handleTouchMove(ev) {
      let clientY = ev.changedTouches[0].clientY | 0;
      let distance = clientY - this.startY;
      this.direction = distance > 0 ? "down" : "up";
      if (
        this.direction === "down" &&
        this.scrollTop(this.eventTarget) === 0 &&
        this.topStatus !== "loading"
      ) {
        // top移动到顶部
        // ev.preventDefault();
        ev.stopPropagation();
        if (this.maxDistance > 0) {
          this.translate =
            this.maxDistance >= distance
              ? distance + this.startscrollTop
              : this.translate | 0;
        } else {
          this.translate = distance + this.startscrollTop;
        }

        this.topStatus = this.translate >= this.topDistance ? "drop" : "pull";
      }

      if (this.direction === "up") {
        this.bottomReached = this.bottomReached || this.checkBottomReached();
      }
      if (
        this.direction === "up" &&
        this.bottomReached &&
        this.bottomStatus !== "loading" &&
        !this.bottomAllLoaded
      ) {
        // ev.preventDefault();
        ev.stopPropagation();
        if (this.maxDistance > 0) {
          this.translate =
            Math.abs(distance) <= this.maxDistance
              ? parseInt(this.scrollTop(this.eventTarget))   -
                this.startscrollTop +
                distance
              : this.translate | 0;
        } else {
          this.translate =
            this.scrollTop(this.eventTarget) - this.startScrollTop + distance;
        }
        this.bottomStatus =
          -this.translate >= this.bottomDistance ? "drop" : "pull";
      }
    },
    handleTouchEnd(ev) {
      if (this.direction === "down") {
        if (this.topStatus === "drop") {
          this.translate = "50";
          this.topStatus = "loading";
          this.topMethod();
        } else {
          this.translate = "0";
          this.topStatus = "pull";
        }
      }

      if (this.direction === "up" && this.bottomReached) {
        this.bottomReached = false;
        if (this.bottomStatus === "drop") {
          this.translate = "-50";
          this.bottomStatus = "loading";
          this.bottomMethod();
        } else {
          this.translate = "0";
          this.bottomStatus = "pull";
        }
      }
    },
    getScrollEventTarget(element) {
      // 获取触发元素
      let currentNode = element;
      while (
        currentNode &&
        currentNode.tagName !== "HTML" &&
        currentNode.tagName !== "BODY" &&
        currentNode.nodeType === 1
      ) {
        let overflowY = document.defaultView.getComputedStyle(currentNode)
          .overflowY;
        if (overflowY === "scroll" || overflowY === "auto") {
          return currentNode;
        }
        currentNode = currentNode.parentNode;
      }
      return window;
    },
    checkBottomReached() {
      // 是否滚动到底部
      if (this.scrollEventTarget === window) {
        return (
          document.documentElement.scrollTop ||
          document.body.scrollTop + document.documentElement.clientHeight >=
            document.body.scrollHeight
        );
      } else {
        return (
          parseInt(this.$el.getBoundingClientRect().bottom) <=
          parseInt(this.eventTarget.getBoundingClientRect().bottom) + 1
        );
      }
    },
    scrollTop(element) {
      if (element === window) {
        return Math.max(
          window.pageYOffset || 0,
          document.documentElement.scrollTop
        );
      }
      return element.scrollTop | 0;
    }
  }
};
</script>

<style lang="scss">
.loadmore {
  overflow: hidden;
  .loadmore-content {
    position: relative;
    // transition: 0.2s;
   
    .load.ignore{
        position: absolute;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: grey;
    }
    .load-top.ignore{
        left: 0;
        top: -50px;
    }
    .load-bottom.ignore{
        left: 0;
        bottom: -50px;
    }
  }
}
</style>