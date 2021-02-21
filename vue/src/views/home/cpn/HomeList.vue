<template>

  <ul class="admin-list clearfix">

    <li 
      class="admin-item" 
      :class="{active: path === '/home/section'}"
      @click="changeCategory('/home/section')"
    >
      <ContainerOutlined />
      <span class="item-name">部门管理</span>
    </li>

    <li 
      class="admin-item" 
      :class="{active: path === '/home/staff'}"
      @click="changeCategory('/home/staff')"
    >
      <UserOutlined />
      <span class="item-name">员工信息</span>
    </li>

    <li 
      class="admin-item"
      :class="{active: path === '/home/salary'}" 
      @click="changeCategory('/home/salary')"
    >
      <AccountBookOutlined />
      <span class="item-name">工资管理</span>
    </li>

    <li 
      class="admin-item" 
      :class="{active: path === '/home/chart'}"
      @click="changeCategory('/home/chart')"
    >
      <BarChartOutlined />
      <span class="item-name">报表统计</span>
    </li>

    <li 
      class="admin-item" 
      :class="{active: path === '/home/reset'}"
      @click="changeCategory('/home/reset')"
    >
      <SettingOutlined />
      <span class="item-name">修改密码</span>
    </li>

  </ul>

</template>

<script lang='ts'>
  import { BarChartOutlined, ContainerOutlined, UserOutlined, AccountBookOutlined, SettingOutlined } from '@ant-design/icons-vue';

  import { defineComponent, ref, watchEffect } from 'vue'
  import { useRoute, useRouter } from 'vue-router'


  export default defineComponent({
    components: {
      BarChartOutlined,
      ContainerOutlined,
      UserOutlined,
      AccountBookOutlined,
      SettingOutlined
    },
    setup() {

      const router = useRouter()
      const route = useRoute()

      const path = ref('')

      watchEffect(() => {
        path.value = route.path
      })

      const changeCategory = (pathname: string) => {
        router.replace(pathname)
      }

      return {
        path,
        changeCategory
      }
    }
  })

</script>

<style scoped lang='less'>
  .admin-list {
    width: 100%;
    height: 100%;
    background-color: rgb(17, 16, 16);

    .admin-item {
      margin-bottom: 10px;
      padding: 20px 5px;
      font-size: 16px;
      color: #fff;
      transition: all .3s;

      &.active,
      &:hover {
        font-size: 17px;
        color: #333;
        background-color: #fff;
      }

      .item-name {
        margin-left: 5px;
        cursor: default;
      }
    }
  }
</style>