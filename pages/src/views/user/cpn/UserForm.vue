<template>
  <a-form layout="vertical" :model="formState" @finish="handleFinish">
    <!-- 用户名 -->
    <a-form-item>
      <a-input
        v-model:value="formState.username"
        size="large"
        placeholder="请输入用户名"
      >
        <template #prefix
          ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>

    <!-- 密码 -->
    <a-form-item>
      <a-input
        v-model:value="formState.password"
        type="password"
        size="large"
        placeholder="请输入密码"
      >
        <template #prefix
          ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>

    <!-- 登录按钮 -->
    <a-form-item
      ><a-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
        >登录</a-button
      ></a-form-item
    >
  </a-form>
</template>


<script lang="ts">
  import { UserOutlined, LockOutlined } from "@ant-design/icons-vue"
  import { defineComponent, reactive } from "vue"

  import { IUserForm } from "@/typings/user"

  export default defineComponent({
    components: {
      UserOutlined,
      LockOutlined,
    },
    emits: ["login"],
    setup(props, { emit }) {
      const formState: IUserForm = reactive({
        username: "",
        password: "",
      })

      const handleFinish = (): void => {
        emit("login", formState)
      }

      return {
        formState,
        handleFinish,
      }
    },
  })
</script>