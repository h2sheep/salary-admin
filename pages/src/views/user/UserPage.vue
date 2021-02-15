<template>
  <div class="user-page">
    <div class="login-content clearfix">
      <h2>管理员登录</h2>

      <div class="user-login">
        <user-form @login="login" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  import { useRouter } from 'vue-router'

  import UserForm from "./cpn/UserForm.vue"

  import { IUserForm } from "@/typings/user"

  export default defineComponent({
    components: {
      UserForm,
    },
    setup() {
      const router = useRouter()

      const login = (user: IUserForm) => {
        console.log(user)
        router.replace('/admin')
      }

      return {
        login,
      }
    },
  })
</script>

<style scoped lang='less'>
.user-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .login-content {
    width: 500px;
    height: 100%;
    margin: 0 auto;

    h2 {
      margin: 100px 0 50px;
      font-size: 30px;
      text-align: center;
      color: #666;
    }

    .user-login {
      width: 500px;
      height: 200px;
      padding: 10px;
    }
  }
}
</style>