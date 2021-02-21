<template>
  <a-form layout="vertical" :model="formState" @finish="handleFinish">
    <!-- 昵称 -->
    <a-form-item>
      <a-input size="large" placeholder="请输入昵称" v-model:value="formState.nickname" @change="onNicknameChange">
        <template #prefix><CommentOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>

    <!-- 用户名 -->
    <a-form-item>
      <a-input size="large" placeholder="请输入用户名" v-model:value="formState.username" @change="onUsernameChange">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>

    <!-- 密码 -->
    <a-form-item>
      <a-input type="password" size="large" placeholder="请输入密码" v-model:value="formState.password1" >
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>

    <!-- 密码 -->
    <a-form-item>
      <a-input type="password" size="large" placeholder="再次输入密码" v-model:value="formState.password2" >
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>

    <!-- 登录按钮 -->
    <a-form-item>
      <a-button 
        type="primary" html-type="submit" block
        :disabled="formState.username === '' || formState.nickname === '' || formState.password1 === '' || formState.password2 === ''"
      >
        注册
      </a-button>
    </a-form-item>

  </a-form>
</template>


<script lang="ts">
  import { CommentOutlined, UserOutlined, LockOutlined } from "@ant-design/icons-vue"
  import { ComponentInternalInstance, defineComponent, getCurrentInstance, reactive } from "vue"

  export default defineComponent({
    components: {
      CommentOutlined,
      UserOutlined,
      LockOutlined,
    },
    emits: ["signin"],
    setup(props, { emit }) {
      const { proxy } = getCurrentInstance() as ComponentInternalInstance

      const formState = reactive({
        nickname: "",
        username: "",
        password1: "",
        password2: "",
      })

      // 取消空格
      const onNicknameChange = () => {
        formState.nickname = formState.nickname.trim()
      }

      // 用户名规则
      const onUsernameChange = () => {
        const reg = /^[a-zA-Z][A-Za-z0-9]+$/
        if (!reg.test(formState.username)) proxy?.$message.warn('只能输入字母和数字')
      }

      // 提交登录事件
      const handleFinish = () => {
        if (formState.password1 !== formState.password2) return proxy?.$message.warn('两次输入密码不一致')

        emit("signin", {
          nickname: formState.nickname,
          username: formState.username,
          password: formState.password1
        })
      }

      return {
        formState,
        onNicknameChange,
        onUsernameChange,
        handleFinish
      }
    },
  })
</script>
