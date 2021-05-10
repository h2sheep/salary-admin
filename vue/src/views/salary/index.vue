<template>
    <h2 class="admin-list-title">工资管理</h2>

    <!-- 部门选择框 -->
    <salary-select @change="setStaffList" showAllOptions />

    <!-- 表格主体 -->
    <salary-table :data="data" @remove="deleteStaffItem" />

    <!-- 弹窗 -->
    <salary-modal @add="addStaffItem" @update="updateStaffItem" />
</template>

<script lang='ts'>

  import { computed, defineComponent } from 'vue'
  import { useStore } from 'vuex'
  import { IGlobalState } from '@/store'

  import SalaryModal from './cpn/SalaryModal.vue'
  import SalarySelect from './cpn/SalarySelect.vue'
  import SalaryTable from './cpn/SalaryTable.vue'
  import { PlusOutlined } from '@ant-design/icons-vue'

  import { IUseStaff, useStaff } from '@/hooks/staff'

  export default defineComponent({
    components: {
      SalaryModal,
      SalarySelect,
      SalaryTable,
      PlusOutlined
    },
    setup() {

      const store = useStore<IGlobalState>()
      const data = computed(() => store.state.staff.staffList)

      const { setStaffList, addStaffItem, deleteStaffItem, updateStaffItem }: IUseStaff = useStaff()
      setStaffList()

      return {
        data,
        setStaffList,
        addStaffItem,
        deleteStaffItem,
        updateStaffItem
      }
    }
  })

</script>

<style scoped lang='less'>
  .add-btn {
    margin: 20px 5px 5px 0;
  }
</style>