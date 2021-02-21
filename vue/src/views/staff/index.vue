<template>
    <h2 class="admin-list-title">员工信息</h2>

    <!-- 添加按钮 -->
    <a-button type="primary" class="add-btn" @click="open">
      <template #icon><PlusOutlined /></template>
      添加
    </a-button>

    <!-- 部门选择框 -->
    <staff-select @change="setStaffList" />

    <!-- 表格主体 -->
    <staff-table :data="data" @remove="deleteStaffItem" />

    <!-- 弹窗 -->
    <staff-modal @add="addStaffItem" @update="updateStaffItem" />
</template>

<script lang='ts'>

  import { ComponentInternalInstance, computed, defineComponent, getCurrentInstance, onMounted, reactive } from 'vue'
  import { useStore } from 'vuex'
  import { IGlobalState } from '@/store'

  import StaffModal from './cpn/StaffModal.vue'
  import StaffSelect from './cpn/SectionSelect.vue'
  import StaffTable from './cpn/StaffTable.vue'
  import { PlusOutlined } from '@ant-design/icons-vue'

  import { IUseStaff, useStaff } from '@/hooks/staff'

  export default defineComponent({
    components: {
      StaffModal,
      StaffSelect,
      StaffTable,
      PlusOutlined
    },
    setup() {

      const store = useStore<IGlobalState>()
      const data = computed(() => store.state.staff.staffList)

      const { proxy } = getCurrentInstance() as ComponentInternalInstance
      // 添加事件
      const open = () => {
        proxy?.$bus.emit('addStaff')
      }

      const { setStaffList, addStaffItem, deleteStaffItem, updateStaffItem }: IUseStaff = useStaff()
      setStaffList()

      return {
        data,
        open,
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