<template>
  <div class="update-page">
    <div class="update-content clearfix">
      <h2>修改密码</h2>

      <div class="update-form">
        <password-form @reset="resetPassword" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

  import { ComponentInternalInstance, defineComponent, getCurrentInstance } from "vue"
  import { useRouter } from "vue-router"

  import PasswordForm from './cpn/PasswordForm.vue'

  import { IUseLocalstorage, useLocalstorage } from "@/hooks/localstorage"
  import IBaseSuccess from "@/typings/common"
  import { resetAdminPassword } from "@/network/admin"

  export default defineComponent({
    components: {
      PasswordForm,
    },
    setup() {
      
      const router = useRouter()
      const { proxy } = getCurrentInstance() as ComponentInternalInstance
      const { getLocalstorage }: IUseLocalstorage = useLocalstorage()

      // 重置密码
      const resetPassword = (password: string) => {
        const uid = getLocalstorage('salary-admin-uid') as string
        resetAdminPassword<IBaseSuccess>(uid, password).then(result => {
          if (result.code === 0) {
            proxy?.$message.success('需要重新登录')
            router.replace('/user')
          }
        })
      }

      return {
        resetPassword
      }
    },
  })
</script>

<style scoped lang='less'>
.update-page {
  width: 100%;
  height: 100%;

  .update-content {
    width: 500px;
    height: 100%;
    margin: 0 auto ;

    h2 {
      margin: 100px 0 50px;
      font-size: 30px;
      text-align: center;
      color: #666;
    }

    .update-form {
      width: 500px;
      height: 200px;
      padding: 10px;
    }
  }
}
</style>