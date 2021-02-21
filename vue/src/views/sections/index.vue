<template>

  <h2 class="admin-list-title">部门管理</h2>

  <!-- 添加按钮 -->
  <a-button type="primary" class="add-btn" @click="open">
    <template #icon><PlusOutlined /></template>
    添加
  </a-button>

  <!-- 表格主体 -->
  <section-table :data="data" @remove="removeSectionItem" />

  <!-- 弹窗 -->
  <section-modal @update="updateSectionItem" @add="addSectionItem" />

</template>

<script lang='ts'>

  import { ComponentInternalInstance, computed, defineComponent, getCurrentInstance } from 'vue'

  import SectionTable from './cpn/SectionTable.vue'
  import SectionModal from './cpn/SectionModal.vue'

  import { PlusOutlined } from '@ant-design/icons-vue'

  import { useSection, IUseSection } from '@/hooks/section'
  import { useStore } from 'vuex'
  import { IGlobalState } from '@/store'

  export default defineComponent({
    components: {
      SectionTable,
      SectionModal,
      PlusOutlined,
    },
    setup() {
      
      // 获取数据
      const store = useStore<IGlobalState>()
      const data = computed(() => store.state.section.sectionList)
      
      const { proxy } = getCurrentInstance() as ComponentInternalInstance
      // 添加事件
      const open = () => {
        proxy?.$bus.emit('addSectionItem')
      }

      const { setSectionList, addSectionItem, removeSectionItem, updateSectionItem }: IUseSection = useSection()
      setSectionList()

      return {
        data,
        open,
        addSectionItem,
        removeSectionItem,
        updateSectionItem
      }
    }
  })

</script>

<style scoped lang='less'>
  .add-btn {
    margin: 20px 0 5px 0;
  }
</style>