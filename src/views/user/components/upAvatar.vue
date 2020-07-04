<template>
  <transition name="upAvatar">
    <div class="upload-avatar" v-show="isShowUpAvatar">
      <i class="iconfont icon" @click="close()">&#xe602;</i>
      <span class="upload-avatar-text">上传新头像</span>
      <el-upload
        class="avatar-uploader"
        action="http://zhangzqcloud.cn/api/uploadAvatar"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :limit="1"
        :data="{filename:userId}"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
      </el-upload>
    </div>
  </transition>
</template>

<script>
import { updateUserAvatar } from '@/api/user'

export default {
  props: ['userId'],
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    close () {
      this.$store.commit('changeShowUpAvatar', false)
    },
    beforeAvatarUpload (file) {
      const type = file.type === 'image/jpeg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!type) {
        this.$message.error('上传头像图片只能是 JPG或者PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return type && isLt2M
    },
    async handleAvatarSuccess (res, file) {
      const result = await updateUserAvatar(this.userId, res.result.filename)
      if (file.status === 'success') {
        this.$message({
          type: 'success',
          message: result.result.message,
          center: true,
          offset: 80
        })
        this.$emit('update')
        this.close()
      } else {
        this.$message({
          type: 'error',
          message: '上传失败,请重新上传',
          center: true,
          offset: 80
        })
      }
    }
  },
  computed: {
    isShowUpAvatar () {
      return this.$store.state.isShowUpAvatar
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-avatar {
  width: 350px;
  height: 250px;
  background-color: #fff;
  position: fixed;
  z-index: 99;
  box-shadow: 0 0 10px 1px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    color: #000;
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
  .upload-avatar-text {
    font-size: 20px;
    margin-bottom: 20px;
  }
}
.upAvatar-enter-active {
  animation: uploadAvatar 0.5s;
}
.upAvatar-leave-active {
  animation: uploadAvatar 0.5s reverse;
}
@keyframes uploadAvatar {
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
<style lang="scss">
.avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .el-upload:hover {
    border-color: #ff7b4d;
  }
  .avatar-uploader-icon {
    width: 100%;
    font-size: 28px;
    color: #8c939d;
    width: 130px;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }
  .el-icon-plus {
    width: 100%;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
