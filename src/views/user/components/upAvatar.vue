<template>
  <transition name="upAvatar">
    <div class="upload-avatar" v-show="isShowUpAvatar">
      <i class="iconfont icon" @click="close()">&#xe602;</i>
      <span class="upload-avatar-text">上传新头像</span>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :limit="1"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    close() {
      this.$store.commit("changeShowUpAvatar", false);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  computed: {
    isShowUpAvatar() {
      return this.$store.state.isShowUpAvatar;
    }
  }
};
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
    background: linear-gradient(90deg, #454e93, #ff7b4d);
    color: transparent;
    background-clip: text;
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
  }
  .el-upload:hover {
    border-color: #ff7b4d;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 130px;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>