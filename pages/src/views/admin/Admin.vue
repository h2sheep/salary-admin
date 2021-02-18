<template>

  <div class="admin">
    <!-- header -->
    <a-row>
      <a-col :span="24">
        <Suspense>
          <template #default><admin-header /></template>
          <template #fallback>loading...</template>
        </Suspense>
        
      </a-col>
    </a-row>

    <!-- main -->
    <a-row 
      class="main"
      type="flex" justify="space-between"
    >
      <!-- list -->
      <a-col :span="4"><admin-list /></a-col>

      <!-- content -->
      <a-col :span="19" class="admin-content">
        <router-view />
      </a-col>
    </a-row>
  </div>

</template>

<script lang="ts">

  import { defineComponent } from 'vue'

  import AdminHeader from './cpn/AdminHeader.vue'
  import AdminList from './cpn/AdminList.vue'

  export default defineComponent({
    components: {
      AdminHeader,
      AdminList,
    },
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
        padding: 10px;
        min-height: 100vh;
        background-color: #fff;
      }
    }
  }
</style>