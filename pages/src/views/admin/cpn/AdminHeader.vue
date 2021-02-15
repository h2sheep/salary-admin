<template>

  <a-row 
    type="flex" 
    justify="space-between" align="middle"
    class="admin-header"
  >
    <a-col :span="6" :offset="1"><h2>工资管理系统</h2></a-col>
    <a-col :span="3">
      <a-avatar :src="userInfo.avatar" size="large" class="avatar"/>

      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          <span class="level">{{ userInfo.level === 0 ? '管理员' : '超级管理员' }}</span>
        </a>

        <template #overlay>
          <a-menu><a-menu-item @click="logout">退出登录</a-menu-item></a-menu>
        </template>

      </a-dropdown>
    </a-col>
    
  </a-row>
 

</template>

<script lang="ts">

  import { IUserInfo } from '@/typings/user'
  import { defineComponent, PropType } from 'vue'


  export default defineComponent({
    props: {
      userInfo: Object as PropType<IUserInfo>
    },
    emits: ['logout'],
    setup(props, { emit }) {
      const logout = (): void => {
        emit('logout')
      }

      return {
        logout
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
    
    .level {
      margin-left: 5px;
      vertical-align: middle;
      color: #fff;
      cursor: pointer;
    }

  }
</style>