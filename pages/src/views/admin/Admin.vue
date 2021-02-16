<template>

  <div class="admin">
    <!-- header -->
    <a-row>
      <a-col :span="24">
        <admin-header 
          :userInfo="state.userInfo" 
          @logout="logout"
        />
      </a-col>
    </a-row>

    <!-- main -->
    <a-row 
      class="main"
      type="flex" justify="space-between"
    >
      <!-- list -->
      <a-col :span="4">
        <admin-list  @changeCategory="changeCategory" />
      </a-col>

      <!-- content -->
      <a-col :span="19" class="admin-content">
        <router-view />
      </a-col>
    </a-row>
  </div>

</template>

<script lang="ts">

  import { defineComponent, reactive } from 'vue'
  import { useRouter } from 'vue-router'

  import AdminHeader from './cpn/AdminHeader.vue'
  import AdminList from './cpn/AdminList.vue'

  import { getUserInfo } from '@/network/user'
  import { IUserInfo } from '@/typings/user'

  export default defineComponent({
    components: {
      AdminHeader,
      AdminList,
    },
    setup() {

      const router = useRouter()

      const state = reactive({
        userInfo: {},
        category: 0
      })

      // 获取用户信息
      getUserInfo<IUserInfo>().then(res => {
        state.userInfo = res.data
      })

      // 退出登录
      const logout = ():void => {
        // 清除token
        localStorage.removeItem('token')
        router.replace('/login')
      }

      // 切换内容
      const changeCategory = (category: number): void => {
        state.category = category
        console.log(category)
        switch (category) {
          case 0:
            router.push('/admin/chart')
            break
          case 1:
            router.push('/admin/section')
            break
          case 2:
            router.push('/admin/staff')
            break
          case 3:
            router.push('/admin/salary')
            break
          case 4:
            router.push('/admin/update')
            break
          default:
            break
        }
      }

      return {
        state,
        logout,
        changeCategory
      }
    }
  })

</script>

<style scoped lang='less'>
  .admin {
    width: 100%;
    background-color: rgb(245, 241, 245);

    .main {
      margin-top: 10px;

      .admin-content {
        height: 100%;
        min-height: 100vh;
        background-color: #fff;
      }
    }
  }
</style>