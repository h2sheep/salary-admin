<template>

  <div class="admin">
    <!-- header -->
    <a-row>
      <a-col :span="24"><home-header /></a-col>
    </a-row>

    <!-- main -->
    <a-row type="flex" justify="space-between" class="main">

      <!-- list -->
      <a-col :span="4"><home-list /></a-col>
      <!-- content -->
      <a-col :span="19" class="admin-content"><router-view /></a-col>
      
    </a-row>
  </div>

</template>

<script lang="ts">

  import { defineComponent } from 'vue'

  import HomeHeader from './cpn/HomeHeader.vue'
  import HomeList from './cpn/HomeList.vue'

  export default defineComponent({
    components: {
      HomeHeader,
      HomeList,
    },
  })

</script>

<style scoped lang='less'>
  .admin {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding-top: 80px;
    background-color: rgb(245, 241, 245);

    .main {
      height: 100%;
      margin-top: 10px;

      .admin-content {
        height: 100%;
        padding: 0 10px;
        background-color: #fff;
      }
    }
  }
</style>