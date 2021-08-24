<template>
  <div class="hot_page">
    <div class="menu-list">
      <span
        class="menu-item"
        :class="{'active':item.type === type}"
        v-for="item in typeList"
        :key="item.type"
        @click="changeType(item.type)"
      >{{item.name}}</span>
    </div>

    <div class="select">
      <span
        @click="changeKey(item.key)"
        class="select-item"
        v-for="(item,idx) in selectItem[type]"
        :key="idx"
        :class="{'active':item.key=== keyWord[type]}"
      >{{item.name}}</span>
    </div>

    <div class="list-content">
      <transition-group enter-active-class="animated fadeIn">
        <div
          v-if="type=== 'pinglun'"
          class="list-item-1 flex"
          v-for="(item,index) in list"
          :key="index"
        >
          <div class="order" :style="{'color': index < 3 ? color[index] : '#999'}">{{index}}</div>
          <div class="user">
            <div class="user-img"></div>
            <div class="user-info">
              <p class="user-name">adminhah</p>

              <p class="user-score" v-if="type=== 'pinglun'">
                <span style="color:#000;font-weight:400;">800</span> 条评论
              </p>
            </div>
          </div>
        </div>
      </transition-group>

      <transition-group enter-active-class="animated fadeIn">
        <div
          class="list-item-2 flex"
          v-if="type==='tiezi'"
          v-for="(item,index) in list"
          :key="index"
        >
          <div class="order" :style="{'color': index < 3 ? color[index] : '#999'}">{{index}}</div>
          <div class="info">
            <div class="title">web 前端 开发</div>
            <p>3.2k 评论</p>
          </div>
          <div class="img"></div>
        </div>
      </transition-group>

      <transition-group enter-active-class="animated fadeIn">
        <div
          v-if="type=== 'qiandao'"
          class="list-item-1 flex"
          v-for="(item,index) in list"
          :key="index"
        >
          <div class="order" :style="{'color': index < 3 ? color[index] : '#999'}">{{index}}</div>
          <div class="user">
            <div class="user-img"></div>
            <div class="user-info">
              <p class="user-name">adminhah</p>
              <p class="user-score">2021-05-28</p>
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "tiezi", // tiezi pinglun qiandao,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      keyWord: {
        tiezi: "3",
        pinglun: "last",
        qiandao: "day"
      },
      typeList: [
        {
          type: "tiezi",
          name: "热门贴子"
        },
        {
          type: "pinglun",
          name: "热门评论"
        },
        {
          type: "qiandao",
          name: "热门排行"
        }
      ],
      color: ["red", "tomato", "##16d1a2"],
      selectItem: {
        tiezi: [
          {
            key: "3",
            name: "3日内"
          },
          {
            key: "7",
            name: "7日内"
          },
          {
            key: "30",
            name: "30日内"
          },
          {
            key: "all",
            name: "全部"
          }
        ],
        pinglun: [
          {
            key: "last",
            name: "最新评论"
          },
          {
            key: "hot",
            name: "最热评论"
          }
        ],
        qiandao: [
          {
            key: "all",
            name: "总签到榜"
          },
          {
            key: "day",
            name: "今日签到榜"
          }
        ]
      }
    };
  },
  computed: {},
  methods: {
    changeType(type) {
      this.type = type;
    },
    changeKey(key) {
      this.keyWord[this.type] = key;
    }
  }
};
</script>

<style lang="scss" scoped>
.hot_page {
  .select {
    // height: 80px;
    margin: 20px 0;
    .select-item {
      display: inline-block;
      padding: 10px 40px;
      border-radius: 20px;
      &.active {
        background-color: #16d1a2;
        color: whitesmoke;
      }
    }
  }

  .menu-list {
    height: 80px;
    font-weight: bold;
    box-shadow: 0 3px 3px 5px #ddd;
    .menu-item {
      display: inline-block;
      padding: 20px;

      &.active {
        color: #16d1a2;

        border-bottom: 4px solid #16d1a2;
      }
    }
  }

  .list-content {
    height: calc(100vh - 190px);
    //   border: 1px solid red;
    overflow: scroll;
    .order {
      font-size: 40px;
      font-weight: bold;
      margin-right: 30px;
    }
    .list-item-1 {
      border-bottom: 1px solid $border-color;
      padding: 30px 50px;

      .user {
        display: flex;

        align-items: center;
        .user-img {
          width: 120px;
          height: 120px;
          background-color: #ccc;
          border-radius: 50%;
          margin-right: 40px;
        }
        .user-info {
          .user-name {
            font-size: 40px;
            font-weight: bold;
          }
          .user-score {
            color: #ddd;
            border-radius: 10px;
          }
        }
      }
    }

    .list-item-2 {
      padding: 30px 50px;
      align-items: flex-start;
      border-bottom: 1px solid $border-color;
      .info {
        text-align: left;
        .title {
          width: 400px;
          height: 80px;
          margin-bottom: 20px;
          font-size: 36px;
          font-weight: bold;
        }
      }

      .img {
        margin-top: 20px;
        margin-left: 20px;
        width: 230px;
        height: 100px;
        background-color: #ccc;
      }
    }
  }
}
</style>