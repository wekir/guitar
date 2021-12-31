<template>
  <div class="loginpage">
    <div class="imgbg">
      <var-image :src="require('../assets/img/login/bg.jpg')" />
    </div>

    <!-- <h1>登录</h1> -->
    <var-button class="loginbtn"
                type="success"
                @click="loginclick">登录</var-button>
    <!-- <div class="registered">
      <var-button class="zc"
                  size="mini"> 注册</var-button>
      <var-button class="xgmm"
                  size="mini">修改密码</var-button>
    </div> -->
    <div v-if="!btnactive">
      <div class="number">
        <span class="phone">手机号:</span>
        <input class="logininput"
               type="text"
               v-model="phone">
      </div>
      <div class="info">
        <span class="phone">验证码:</span>
        <input class="yzminput"
               type="text"
               v-model="captcha">
        <var-button class="getcaptcha"
                    @click="getcaptcha">获取验证码</var-button>
      </div>

    </div>
    <div v-if="btnactive">
      <div class="account">
        <span class="phone">手机号:</span>
        <input class="logininput"
               type="text"
               v-model="phone">
      </div>
      <div class="info">
        <span class="phone">密码:</span>
        <input class="passwordinput"
               type="password"
               v-model="password">
      </div>

    </div>
    <div class="btns">
      <var-button @click="btnfclick"
                  class="btn01"
                  size="small">短信登录</var-button>
      <var-button @click="btnsclick"
                  class="btn02"
                  size="small">密码登录</var-button>
    </div>

  </div>
</template>

<script>
import { getlogin, getpasswordlogin, getcaptcha } from '../network/login'
// import md5 from 'js-md5'
import { Dialog } from '@varlet/ui'
export default {
  components: {
    [Dialog.Component.name]: Dialog
  },
  data () {
    return {
      phone: '',
      captcha: '',
      password: '',
      // md5password: '',
      btnactive: false
    }
  },
  methods: {
    /**
     * 登录
     */
    loginclick () {
      const self = this
      if (!self.btnactive) {
        getlogin(self.phone, self.captcha).then(res => {
          console.log(res);
          self.$router.push('/music')
        }).catch(err => {
          Dialog('验证码错误，请从新输入')
          console.log(err);
        })
      }
      if (self.btnactive) {
        // self.md5password = md5(self.password)
        console.log('self.password', self.password);
        getpasswordlogin(self.phone, self.password).then(res => {
          console.log(res);
          self.$router.push('/music')
        }).catch(err => {
          Dialog('密码错误，请从新输入')
          console.log(err);
        })
      }
    },
    /**
     * 获取验证码
     */
    getcaptcha () {
      getcaptcha(this.phone).then(res => {
        console.log(res);
        // this.captcha = 
      }).catch(err => {
        console.log(err);
      })
    },  
    /**
     * 短信登录按钮被点击
     */
    btnfclick () {
      this.btnactive = false
    },
    /**
     * 密码登录按钮被点击
     */
    btnsclick () {
      this.btnactive = true
    }
  },
  // watch: {
  //   password (val) {
  //     console.log(val);
  //     // console.log(typeof this.password);
  //     this.md5password = md5(this.password)
  //     // console.log(val);
  //     console.log('self.password ', this.md5password);
  //   }
  // }
}
</script>

<style lang="less" scoped>
.loginpage {
  margin: 0;
  display: flex;
  justify-content: center;

  .imgbg {
    position: fixed;
    z-index: -10;
    height: 100vh;
    width: 135vh;
    // margin-left: -38vw;
  }
  //登录样式
  .loginbtn {
    position: absolute;
    margin: 130vw 20vw 20vw 20vw;
    width: 57vw;
  }
  //注册/修改密码
  // .registered {
  //   position: absolute;
  //   margin: 145vw 20vw 20vw 20vw;
  //   width: 57vw;
  //   .zc {
  //     width: 20vw;
  //     text-align: center;
  //     background-color: #858585;
  //     // margin-left: 2vw;
  //     margin-right: 2vw;
  //   }
  //   .xgmm {
  //     width: 20vw;
  //     text-align: center;
  //     background-color: #858585;
  //   }
  // }
  .number {
    // width: 58vw;
    position: absolute;
    margin: 90vw 20vw 20vw 20vw;
    .phone {
      color: #78746e;
      font-size: 4vw;
      margin-right: 2vw;
    }
    .logininput {
      background-color: rgba(0, 0, 0, 0);

      width: 40vw;
      height: 6vw;
      border-radius: 5vw;
      color: aliceblue;
      outline: none;
    }
  }
  .account {
    position: absolute;
    margin: 90vw 15vw 20vw 20vw;
    .phone {
      color: #78746e;
      font-size: 4vw;
      margin-right: 2vw;
    }
    .logininput {
      background-color: rgba(0, 0, 0, 0);

      width: 40vw;
      height: 6vw;
      border-radius: 5vw;
      color: aliceblue;
      outline: none;
    }
  }
  .info {
    width: 58vw;
    margin: 103vw 20vw 20vw 20vw;
    // margin-left: -10vw;
    .phone {
      color: #78746e;
      font-size: 4vw;
      margin-right: 2vw;
    }
    .passwordinput {
      background-color: rgba(0, 0, 0, 0);
      width: 40vw;
      height: 6vw;
      margin-left: 4vw;
      border-radius: 5vw;
      color: aliceblue;
      outline: none;
    }
    .logininput {
      background-color: rgba(0, 0, 0, 0);
      width: 40vw;
      height: 6vw;
      border-radius: 5vw;
      color: aliceblue;
      outline: none;
    }
    .yzminput {
      background-color: rgba(0, 0, 0, 0);
      width: 20vw;
      height: 6vw;

      border-radius: 5vw;
      color: aliceblue;
      outline: none;
    }
    //获取验证码按钮
    .getcaptcha {
      // position: absolute;
      // margin: -13vw 0 30vw -15vw;
      // margin: 117vw 20vw 20vw 20vw;
      margin-left: 1vw;
      width: 19vw;
      height: 7vw;
      font-size: 12px;
    }
  }

  //两个小按钮
  .btns {
    position: absolute;
    margin: 117vw 0 30vw 0;
    .btn01 {
      margin-right: 3vw;
      background-color: #858585;
    }
    .btn02 {
      background-color: #858585;
    }
  }
}
</style>