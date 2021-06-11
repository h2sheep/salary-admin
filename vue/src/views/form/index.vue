<template>

<div class="user-page">
  <div class="login-content clearfix">
    <h2>工资管理系统</h2>

    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="login">
        <template #tab><span><KeyOutlined /> 登录 </span></template>
        <login-form @login="login" />
      </a-tab-pane>

      <a-tab-pane key="signin">
        <template #tab><span><IdcardOutlined /> 注册 </span></template>
        <signin-form @signin="signin" />
      </a-tab-pane>
    </a-tabs>
  </div>
</div>


</template>
<script lang="ts">

  import { ComponentInternalInstance, defineComponent, getCurrentInstance, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import LoginForm from './cpn/LoginForm.vue'
  import SigninForm from './cpn/SigninForm.vue'
  import { KeyOutlined, IdcardOutlined } from '@ant-design/icons-vue'

  import { logIn, signIn } from '@/network/admin'
  import { ILogin, ILoginResult, ISignin, ISigninResult } from '@/typings/admin'

  import { useLocalstorage, IUseLocalstorage } from '@/hooks/localstorage'


  export default defineComponent({
    components: {
      LoginForm,
      SigninForm,
      KeyOutlined,
      IdcardOutlined
    },
    setup() {
      const router = useRouter()
      const { proxy } = getCurrentInstance() as ComponentInternalInstance
      const { setLocalstorage }: IUseLocalstorage = useLocalstorage()

      const activeKey = ref('login')

      // 登录
      const login = (admin: ILogin) => {
        logIn<ILoginResult>(admin).then(result => {
          if (result.code === 0) {
            proxy?.$message.success('登录成功')
            setLocalstorage('salary-admin-uid', result.data.uid)
            // router.replace('/')
          } else {
            proxy?.$message.error(result.data)
          }
        })
      }
      
      // 注册
      const signin = (admin: ISignin) => {
        signIn<ISigninResult>(admin).then(result => {
          if (result.code === 0) {
            proxy?.$message.success('注册成功')
            activeKey.value = 'login'
          } else {
            proxy?.$message.error(result.data)
          }
        })
      }

      return {
        activeKey,
        login,
        signin
      }
    }
  })
</script>

<style lang="less" scoped>
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
    }
  }
</style>