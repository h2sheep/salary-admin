<template>
  <div class="update-page">
    <div class="update-content clearfix">
      <h2>修改密码</h2>

      <div class="update-form">
        <password-form @update="updateAdminPassword" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import PasswordForm from './cpn/PasswordForm.vue'
  import { IUseAdmin, useAdmin } from "@/hooks/admin"

  export default defineComponent({
    components: {
      PasswordForm,
    },
    setup() {

      const { updateAdminPassword }: IUseAdmin = useAdmin()

      return {
        updateAdminPassword
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