<template>
  <a-form layout="vertical" :model="formState" @finish="handleFinish">

    <a-form-item>
      <a-input
        v-model:value="formState.oldPassword"
        type="password" size="large" placeholder="请输入新密码"
      >
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-input
        v-model:value="formState.newPassword"
        type="password" size="large" placeholder="请再次输入新密码"
      >
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>

    <!-- 确认按钮 -->
    <a-form-item>
      <a-button
        type="primary" html-type="submit"
        :disabled="formState.oldPassword === '' || formState.newPassword === ''"
      >
        确认
      </a-button>
    </a-form-item>
  </a-form>
</template>


<script lang="ts">
  import { ComponentInternalInstance, defineComponent, getCurrentInstance, reactive } from "vue"
  import { UserOutlined, LockOutlined } from "@ant-design/icons-vue"

  export default defineComponent({
    components: {
      UserOutlined,
      LockOutlined,
    },
    emits: ["reset"],
    setup(props, { emit }) {
      
      const { proxy } = getCurrentInstance() as ComponentInternalInstance

      const formState = reactive({
        oldPassword: "",
        newPassword: "",
      })

      const handleFinish = () => {
        if (formState.oldPassword !== formState.newPassword) return proxy?.$message.warn('两次密码不一致')
          
        emit("reset", formState.newPassword)
      }

      return {
        formState,
        handleFinish,
      }
    },
  })
</script>