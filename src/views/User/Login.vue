<template>
  <div class="login_page">
    <my-header backText="返回" title="登录"></my-header>
    <div class="login-box">
      <div class="logo">logo</div>
      <div class="input-item" :class="{'error':error.email.error}">
        <svg-icon icon="person"></svg-icon>
        <input
          @blur="checkItem"
          valid="required,email"
          v-model="loginForm.username"
          type="text"
          placeholder="请输入登录邮箱"
          name="email"
        />
         <span class="error-tip" v-if="error.email.error">{{error.email.msg}}</span>
      </div>
      <div class="input-item" :class="{'error':error.password.error}">
        <svg-icon icon="lock"></svg-icon>
        <input
          @blur="checkItem"
          v-model="loginForm.passwd"
          type="password"
          placeholder="请输入密码"
          valid="required"
          name="password"
        />
       <span class="error-tip" v-if="error.password.error">{{error.password.msg}}</span>
      </div>

      <div class="input-item flex">
        <div class="code-input">
          <svg-icon icon="images"></svg-icon>
          <input v-model="loginForm.code" type="text" placeholder="请输入验证码" />
        </div>
        <div class="code-img"></div>
      </div>

      <div class="link">
        <a href>注册</a>
        <a href>忘记密码</a>
      </div>

      <button class="btn">登录</button>
    </div>

    <div class="other-login flex">
      <svg-icon icon="qq" ex-class="icon-qq"></svg-icon>
      <svg-icon icon="weixin" ex-class="icon-weixin"></svg-icon>
      <svg-icon icon="weibo" ex-class="icon-weibo"></svg-icon>
    </div>
  </div>
</template>

<script>
const Rules = {
  email: {
    test: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
    msg: "输入正确的邮箱格式"
  },
  required: { test: /^[\S]+$/, msg: "不为空" },
  phone: { test: /^1\d{10}$/, msg: "请输入正确的手机号" }
};

export default {
  data() {
    return {
      loginForm: {
        username: "",
        passwd: "",
        code: ""
      },
      errTip:'',
      error:{
          email:{error:false, msg:''},
          password:{error:false, msg:''}
      }
    };
  },
  methods: {
    checkItem(ev) {
      const target = ev.target;
      const validRules = target.getAttribute("valid").split(",");
      let value = target.value;
      let propName = target.getAttribute('name');
      let result = true, arr = [],errTip = '';

      for (let i = 0; i < validRules.length; i++) {
 
        if (!Rules[validRules[i]].test.test(value)) {
            arr.push(Rules[validRules[i]].msg);
            result = false;
            break;
        }
      }

       if(!result) {
           this.error[propName].error = true;
           this.error[propName].msg = arr.join();
           // 显示错误提示 
           this.errTip = arr.join()
        }else{
            this.error[propName].error = false;
        }

        return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.login_page {
  margin-top: 80px;
  padding: 20px 40px;
  .logo {
    margin: 40px 220px;
    height: 160px;
    background-color: #eee;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btn {
    width: 100%;
    padding: 20px 0;
    font-size: 32px;
    font-weight: 400;
    background-color: #02d199;
    color: #fff;
    border: none;
    border-radius: 20px;
  }
  .btn:active {
    background-color: #06b384;
  }
  .input-item {
    position: relative;
    height: 60px;
    margin: 40px 0;
    padding: 20px 0;
    padding-left: 30px;
    line-height: 60px;
    border-bottom: 1px solid $border-color;
    text-align: left;
    &.error{
        border: 1px solid red;
    }
    input {
      margin-left: 20px;
      border: none;
      font-size: 30px;
      font-weight: 700;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
      font-size: 30px;
    }
    .error-tip{
        position: absolute;
        right: 0;
        bottom: 0px;
        font-size:22px;
        color: red;
    }
  }
  .code-img {
    width: 180px;
    height: 60px;
    background-color: #eee;
  }
  .link {
    display: flex;
    justify-content: space-between;
    a {
      color: #999;
    }
    margin-bottom: 40px;
  }
  .other-login {
    display: flex;
    margin-top: 40px;
    font-size: 80px;

    .icon-qq {
      color: #2fd63a;
    }
    .icon-weibo {
      color: #e6162d;
    }
    .icon-weixin {
      color: #7ca9c9;
    }
  }
}
</style>