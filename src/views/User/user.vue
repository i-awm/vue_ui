<template>
  <div class="user_page">
    <my-header title="用户中心"></my-header>
    <div class="bg-white">
       <div class="bg">
      
      <div class="profile">
        <div class="head flex">
          <div class="user">
            <div class="user-img"></div>
            <div class="user-info">
              <p class="user-name">adminhah</p>
              <p class="user-score">积分 800</p>
            </div>
          </div>
          <div class="right">
            <span>个人主页</span>
          </div>
        </div>
        <div class="record">
          <div>
            <p class="number">8</p>
            <p>我的贴子</p>
          </div>
          <div>
            <p class="number">29</p>
            <p>收藏夹</p>
          </div>
          <div>
            <p class="number">212</p>
            <p>最近浏览</p>
          </div>
        </div>
      </div>
    </div>
    </div>
   
    
    <div class="menu">
      <div class="item" style="color:tomato">
        <svg-icon icon="teizi"></svg-icon>
        <p>我的贴子</p>
      </div>
      <div class="item" style="color:#16d1a2">
        <svg-icon icon="setting"></svg-icon>
        <p>修改设置</p>
      </div>
      <div class="item">
        <svg-icon icon="record" style="color:rgb(88, 88, 219)"></svg-icon>
        <p>购买记录</p>
      </div>
      <div class="item" style="color:#16d1a2">
        <svg-icon icon="qiandao"></svg-icon>
        <p>签到</p>
      </div>
      <div class="item" style="color:tomato">
        <svg-icon icon="teizi"></svg-icon>
        <p>我的贴子</p>
      </div>
    </div>

    <div class="menu menu-tool">
         <div class="item">
        <svg-icon icon="taolun"></svg-icon>
        <p>讨论</p>
      </div>
       <div class="item">
        <svg-icon icon="question"></svg-icon>
        <p>提问</p>
      </div>
       <div class="item">
        <svg-icon icon="share"></svg-icon>
        <p>分享</p>
      </div>
       <div class="item">
        <svg-icon icon="notice"></svg-icon>
        <p>建议</p>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user_page {
padding-top: 80px;
  height: 100vh;
  background-color: #eee;
  overflow: hidden;
  box-sizing: border-box;

  .bg-white{
    background-color: #fff;
  }
}
.bg {
  position: relative;
  border-radius: 0 0 30% 30%;
  background-color: #16d1a2;
  border-top: 1px solid #16d1a2;
  z-index: 2;
  
}
.profile {
  height: 256px;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  padding: 20px 50px;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 3px 3px 8px #999;
  .head {
    justify-content: space-between;
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
          background-color: #16d1a2;
          color: #ddd;
          border-radius: 10px;
        }
      }
    }

    .right {
      color: #ccc;
    }
  }

  .record {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 36px;
    font-weight: bold;
    margin-top: 20px;
    color: #999;
    div {
      padding: 0 30px;
      border-right: 1px solid #ccc;
    }
    div:nth-child(3) {
      border-right: none;
    }
    .number {
      margin-bottom: 20px;
      color: #000;
    }
  }
}

.menu{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 10px 30px;
    background-color: #fff;
    .item{
        width: 25%;
        text-align: center;
        color: #999;
        font-size: 80px;
        margin-top: 30px;
        p{
            margin-top: 20px;
            font-size: 32px;
            color: #999;
            margin: 10px 20px;
        }

 }
}

.menu-tool{
  margin-top: 40px;
}
</style>