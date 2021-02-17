<template>

  <ul class="admin-list clearfix">

    <li 
      class="admin-item" 
      :class="{active: category === 0}"
      @click="changeCategory(0)"
    >
      <BarChartOutlined />
      <span class="item-name">报表统计</span>
    </li>

    <li 
      class="admin-item" 
      :class="{active: category === 1}"
      @click="changeCategory(1)"
    >
      <ContainerOutlined />
      <span class="item-name">部门管理</span>
    </li>

    <li 
      class="admin-item" 
      :class="{active: category === 2}"
      @click="changeCategory(2)"
    >
      <UserOutlined />
      <span class="item-name">员工信息</span>
    </li>

    <li 
      class="admin-item"
      :class="{active: category === 3}" 
      @click="changeCategory(3)"
    >
      <AccountBookOutlined />
      <span class="item-name">工资管理</span>
    </li>

    <li 
      class="admin-item" 
      :class="{active: category === 4}"
      @click="changeCategory(4)"
    >
      <SettingOutlined />
      <span class="item-name">修改密码</span>
    </li>

  </ul>

</template>

<script lang='ts'>
  import {
    BarChartOutlined,
    ContainerOutlined,
    UserOutlined,
    AccountBookOutlined,
    SettingOutlined
  } from '@ant-design/icons-vue';

  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router';

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

      const category = ref(0)

      const changeCategory = (selfCategory: number) => {
        category.value = selfCategory
        _changeCategory(selfCategory)
      }

      function _changeCategory(category: number): void {
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
        category,
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
      transition: all .6s;

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