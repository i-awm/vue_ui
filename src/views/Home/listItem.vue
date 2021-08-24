<template>
  <div class="list">
      <div class="list-item" v-for="item in list" :key="item._id" @click="goDetail(item._id)">
          <div class="item-head">
              <span class="head-tag"> 提问</span> 
              <div class="head-title txt-1">测试一下测试一下测试一下测试一下测试一下</div>
          </div>
          <div class="item-author">
              <div class="author-icon"><img src="" alt=""></div>
              <span class="author-name">{{item.name}}</span>
          </div>
            <p class="item-txt txt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, eaque nam voluptate in quos rem velit expedita officiis nobis, nostrum non cum. Alias labore aliquam corrupti animi ipsa ipsam ullam!</p>
            <div class="other">
                <span>0 回复</span><span class="date">2021-05-26</span>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        list:Array
    },
    methods:{
        goDetail(tid){
            this.$router.push({path:'/detail/'+tid})
        }
    }
}
</script>

<style lang="scss" scoped>
.list{
    .list-item{
        padding: 30px 10px;
        background-color: #fff;
        padding-left: 30px;
        text-align: left;
        .item-head{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .head-tag{
                padding: 10px;
                margin-right:30px;
                font-size: 16px;
                font-weight: 500;
                color: #000;
                border-radius: 10px;
                background-color: rgb(56, 214, 56);
            }
            .head-title{
                width: 80%;
                text-align: left;
                font-size: 34px;
                font-weight: bold;
                line-height: 60px;  
            }
        }
        .item-author{
            margin-top: 20px;
            .author-icon{
                display: inline-block;
                width: 80px;
                height: 80px;
                background-color: #eee;
                border-radius: 50%;
                vertical-align: middle;
            }
            .author-name{
                font-size: 30px;
                font-weight: bold;
                margin-left: 30px;
            }
        }
        .item-txt{
            width: 83%;
            min-height: 45px;
            margin: 20px 0;
            color: #111;;
           
        }
        .other{
            color: #999;
            padding-top: 10px;
            border-top: 1px solid $border-color;
            .date{
                margin-left: 45px;
            }
        }
    }
}

</style>