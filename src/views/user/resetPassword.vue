<template>
  <div class="resetPassword">
    <i class="iconfont icon" @click="close()">&#xe602;</i>
    <div class="resetPassword-form">
      <h1>Reset your password</h1>
      <div class="form-content">
        <div class="signForm-col1">
          <input type="text" required="required" autocomplete="off" v-model="phoneNumber" />
          <span class="text">手机号</span>
        </div>
        <div class="signForm-col2 code-box">
          <div>
            <input type="text" required="required" autocomplete="off" v-model="vCode" />
            <span class="text">验证码</span>
          </div>
          <button
            @click="getVerificationCode()"
            ref="codeText"
            :class="canClick?'':'button-click'"
          >获取验证码</button> 
        </div>
        <div class="signForm-col3">
          <input type="password" required="required" autocomplete="off" v-model="password" />
          <span class="text">请输入新密码</span>
        </div>
      </div>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import { getVCode, changePassword } from '@/api/user'

export default {
  data () {
    return {
      canClick: true, // 判断是否可以获取验证码
      timer: null, // 计时器
      phoneNumber: '',
      password: '',
      vCode: ''
    }
  },
  methods: {
    async getVerificationCode () {
      if (!this.canClick) return
      const phoneRE = /^1[3456789]\d{9}$/
      if (!phoneRE.test(this.phoneNumber.trim())) {
        this.$message({
          type: 'error',
          message: '请输入正确的手机号',
          center: true,
          offset: 80
        })
      } else {
        this.canClick = false
        let countDownTime = 60
        this.timer = setInterval(() => {
          this.$refs.codeText.textContent = countDownTime + 's'
          if (countDownTime !== 0) {
            countDownTime--
          } else {
            this.$refs.codeText.textContent = '获取验证码'
            countDownTime = 60
            this.canClick = true
            clearInterval(this.timer)
          }
        }, 1000)
        const result = await getVCode(this.phoneNumber)
        if (result.code === 0) {
          this.$message({
            type: 'success',
            message: '验证码已成功发送',
            center: true,
            offset: 80
          })
        } else {
          this.$message({
            type: 'error',
            message: result.message,
            center: true,
            offset: 80
          })
        }
      }
    },
    async submit () {
      const passwordRE = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/
      if (!passwordRE.test(this.password)) {
        this.$message({
          type: 'error',
          message:
            '密码要由8~16个字符,不包含空格,必须包含数字,字母或字符至少两种',
          center: true,
          offset: 80
        })
      } else if (/^\d{6}$/.test(this.vCode)) {
        const result = await changePassword(
          this.phoneNumber,
          this.password,
          this.vCode
        )
        if (result.result.code === 1) {
          this.$message({
            type: 'success',
            message: result.result.message,
            center: true,
            offset: 80
          })
          this.close()
        } else {
          this.$message({
            type: 'error',
            message: result.result.message,
            center: true,
            offset: 80
          })
          this.$router.go(0)
        }
      } else {
        this.$message({
          type: 'error',
          message: '请输入正确的验证码',
          center: true,
          offset: 80
        })
      }
    },
    close () {
      clearInterval(this.timer)
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  color: #000;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  right: 50px;
  top: 30px;
  cursor: pointer;
}
.resetPassword-form {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .form-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      background-color: transparent;
      padding: 5px;
      position: relative;
      z-index: 12;
      width: 100%;
      font-size: 15px;
      border-bottom: 1px solid #000;
    }
    .text {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      font-size: 16px;
      padding: 0 10px;
      transition: 0.5s;
      pointer-events: none;
    }
    [class^="signForm-col"] {
      position: relative;
      width: 250px;
      height: 35px;
      margin-bottom: 40px;
    }
    [class^="signForm-col"]:last-child {
      margin-bottom: 0;
    }
    .code-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      button {
        padding: 5px 10px;
        margin-left: 10px;
      }
    }
    input:focus + .text,
    input:valid + .text {
      top: -20px;
      left: -10px;
    }
  }
  button {
    cursor: pointer;
    width: 110px;
    height: 30px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 15px;
  }
  .button-click {
    cursor: not-allowed;
    background-color: #000;
    color: #fff;
  }
  button:hover {
    background-color: #000;
    color: #fff;
  }
}
</style>
