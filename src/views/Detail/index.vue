<template>
  <div class="detail_page">
    <my-header bgcolor="#02d199" color="#fff" title="详情页"></my-header>
    <h2 class="title">deail 页 {{tid}}</h2>

    <div class="detail">
      <div class="detail-head">
        <div class="user">
          <div class="user-img"></div>
          <div class="user-info">
            <p class="user-name">admin</p>
            <p class="time">3 分钟前</p>
          </div>
        </div>
      </div>
      <div class="detail-body">
        <p
          class="content"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ad maxime minima, corrupti, error eveniet animi deserunt quasi vel aperiam iste ut necessitatibus laboriosam? Veritatis officiis sit non voluptas saepe!</p>
      </div>
      <div class="detail-footer">
        <p>阅读 2万</p>
      </div>
    </div>

    <div class="commets" ref="commetsRef">
      <h2 class="comments-title">评论</h2>
    </div>

    <div class="comments-list" ref="commentRef">
      <div class="comment-item">
        <div class="head">
          <div class="user">
            <div class="user-img"></div>
            <div class="user-info">
              <p class="user-name">admin</p>
              <p class="time">3 分钟前</p>
            </div>
          </div>

          <div class="zan">
            <svg-icon icon="zan" exClass="icon"></svg-icon>

            <span>200</span>
          </div>
        </div>
        <div
          class="comment txt-3"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam qui nesciunt odio repellendus debitis error ea libero distinctio, tenetur nemo laborum at animi officiis sit magni exercitationem ut tempore impedit!</div>
      </div>
      <div class="comment-item" v-for="i in 5" :key="i">
        <div class="head">
          <div class="user">
            <div class="user-img"></div>
            <div class="user-info">
              <p class="user-name">admin</p>
              <p class="time">3 分钟前</p>
            </div>
          </div>

          <div class="zan active">
            <svg-icon icon="zan" exClass="icon"></svg-icon>
            <span>200</span>
          </div>
        </div>
        <div
          class="comment txt-3"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam qui nesciunt odio repellendus debitis error ea libero distinctio, tenetur nemo laborum at animi officiis sit magni exercitationem ut tempore impedit!</div>
      </div>
      <transition 
      enter-active-class="animated tada" 
      leave-active-class="animated bounceOutRight">
        <div v-if="isloading" class="loading">加载中</div>
      </transition>
    </div>

    <div class="bottom-input" ref="bottomRef">
      <div class="input-wrapper">
        <svg-icon icon="advice" exClass="icon"></svg-icon>
        <input type="text" placeholder="写评论" />
      </div>
      <div class="input-right">
        <div class="comment">
          <svg-icon icon="bianji"></svg-icon>
          <p>评论 2</p>
        </div>
        <div
          class="collection"
          :style="{'color':isCollection ? '#02d199' : ''}"
          @click="handleCollection"
        >
          <svg-icon icon="shoucang"></svg-icon>
          <p>{{isCollection ? '已收藏' : '收藏'}}</p>
        </div>
        <div class="zan">
          <svg-icon icon="zan"></svg-icon>
          <p>赞</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tid: String
  },
  data() {
    return {
      comments: {},
      isCollection: false,
      bottomDistance: 0,
      isReached: false,
      isloading: false
    };
  },
  mounted() {
    this.bottomDistance = this.$refs.bottomRef.getBoundingClientRect().top | 0;

    this.$refs.commentRef.addEventListener("touchstart", this.handleTouchStart);
    this.$refs.commentRef.addEventListener("touchmove", this.handleTouchMove);
  },
  methods: {
    handleCollection() {
      this.isCollection = !this.isCollection;
    },
    bottomReached() {
      return (
        parseInt(this.$refs.commentRef.getBoundingClientRect().bottom) <=
        this.bottomDistance + 6
      );
    },
    loadMore() {
      setTimeout(() => {
        this.isReached = false;
        this.isloading = false;
      }, 2000);
    },
    handleTouchMove(ev) {
      if (this.bottomReached() && !this.isReached) {
        this.isReached = true;
        this.isloading = true;
        this.loadMore();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detail_page {
  position: relative;
  overflow: scroll;
  height: 100vh;
  padding-bottom: 90px;
  margin-top: 80px;
  background-color: #ccc;
  h2 {
    padding: 20px;
    margin: 0;
    background-color: #fff;
  }
  .user {
    display: flex;
    align-items: center;
    .user-img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #ccc;
      margin-right: 50px;
    }
    .user-info {
      .user-name {
        font-size: 36px;
        font-weight: bold;
      }
      .time {
        font-size: 28px;
        color: #999;
      }
    }
  }
}

.detail {
  background-color: #fff;
  margin: 10px 0px;
  padding: 10px 50px;
  .detail-body {
    margin: 30px 0;
    .content {
      text-align: left;
      font-size: 30px;
      font-weight: bold;
    }
  }
  .detail-footer {
    padding: 20px 0;
    border-top: 1px solid $border-color;
    text-align: left;
    color: #999;
  }
}

.loading {
  padding: 10px 0;
  //    background-color: red;
}
.comment-item {
  padding: 20px 50px;
  background-color: #fff;
  margin-top: 5px;
  &:nth-child(1) {
    margin-top: 0;
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .zan {
      span {
        font-weight: 300;
        font-size: 36px;
        vertical-align: middle;
      }
    }
    .zan.active {
      color: #02d199;
      .icon {
        color: #02d199;
      }
    }
  }

  .comment {
    width: 100%;
    margin: 20px 0;
    text-align: left;
    font-size: 40px;
  }
}

.commets {
  position: sticky;
  top: 160px;
  box-shadow: 2px 5px 8px #ccc;
}

.comments-title {
  //   margin: 0;
  //   padding: 10px 50px;
  text-align: left;
  font-size: 40px;
  border-bottom: 1px solid $border-color;
  background-color: #fff;
}
.bottom-input {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  z-index: 10;
  box-shadow: 0 -5px 5px #eee;
  .input-wrapper {
    flex: 1;
    padding-left: 30px;
    text-align: left;
    border: 2px solid #999;
    border-radius: 30px;
    height: 60px;
    line-height: 60px;

    input {
      width: 350px;
      border: none;
      margin-left: 20px;
    }
  }

  .input-right {
    display: flex;
    p {
      font-size: 28px;
    }
    > div {
      margin: 0px;
      width: 100px;
      cursor: pointer;
    }
  }
}
</style>