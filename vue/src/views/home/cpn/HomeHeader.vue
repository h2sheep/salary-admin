<template>

  <a-row type="flex" justify="space-between" align="middle" class="admin-header">
    <!-- 标题 -->
    <a-col :span="6" :offset="1"><h2>工资管理系统</h2></a-col>
    <a-col :span="3">
      <!-- 头像 -->
      <a-avatar :src="require('@/assets/img/avatar.jpg')" size="large" class="avatar"/>
      <!-- 昵称 -->
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent><span class="nicname">{{ admin.nickname }}</span></a>
        <template #overlay>
          <a-menu><a-menu-item @click="logout">退出登录</a-menu-item></a-menu>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
 
</template>

<script lang="ts">

  import { defineComponent, onMounted, reactive } from 'vue'
  import { useRouter } from 'vue-router'

  import { getAdminInfo } from '@/network/admin'
  import { IAdminInfoResult } from '@/typings/admin'
  import { IUseLocalstorage, useLocalstorage } from '@/hooks/localstorage'

  export default defineComponent({
    setup() {
      const router = useRouter()
      const { getLocalstorage, removeLocalstorage }:IUseLocalstorage = useLocalstorage()

      const admin = reactive({
        nickname: ''
      })

      // 获取昵称
      onMounted(() => {
        const uid = getLocalstorage('salary-admin-uid') as string
        getAdminInfo<IAdminInfoResult>(uid).then(result => {
          admin.nickname = result.data.nickname
        })
      })

      // 登出
      const logout = (): void => {
        removeLocalstorage('salary-admin-token')
        removeLocalstorage('salary-admin-uid')
        router.replace('/login')
      }

      return {
        admin,
        logout,
      }
    }
  })

</script>

<style lang="less" scoped>
  .admin-header {
    padding: 20px 0;
    background-color: rgb(17, 16, 16);

    h2 { 
      margin: 0; 
      color: #fff; 
      cursor: default;
    }
    
    .nicname {
      margin-left: 5px;
      vertical-align: middle;
      color: #fff;
      cursor: pointer;
    }

  }
</style>