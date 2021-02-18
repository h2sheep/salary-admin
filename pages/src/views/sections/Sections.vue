<template>

  <h2 class="admin-list-title">部门管理</h2>

  <!-- 添加按钮 -->
  <a-button type="primary" class="add-btn" @click="open">
    <template #icon><PlusOutlined /></template>
    添加
  </a-button>

  <!-- 表格主体 -->
  <section-table 
    :data="data" 
    @remove="remove"
    @edit="edit"
  />

  <!-- 弹窗 -->
  <section-modal 
    ref="sectionModal"
    @update="update"
    @add="add"
  />

</template>

<script lang='ts'>

  import { defineComponent, reactive, ref } from 'vue'

  import SectionTable from './cpn/SectionTable.vue'
  import SectionModal from './cpn/SectionModal.vue'

  import { PlusOutlined } from '@ant-design/icons-vue'
  import { ISection, ISectionRow } from '@/typings/section'

  import { useSection, IUseSection } from '@/hooks/section'
  import { getAllSections } from '@/network/section'

  export default defineComponent({
    components: {
      SectionTable,
      SectionModal,
      PlusOutlined,
    },
    setup() {

      const data: ISectionRow[] = reactive([])

      getAllSections<ISection>().then(res => {
        data.push(...res.data)
      })

      const { add, remove, update }: IUseSection = useSection(data)

      // 弹窗
      const sectionModal = ref()

      // 打开添加弹窗
      const open = () => {
        _setModal(sectionModal.value)
      }

      // 打开编辑弹窗
      const edit = (section: ISectionRow) => {
        _setModal(sectionModal.value, section)
      }

      function _setModal(modal: any, section?: ISectionRow) {
        modal.show = true
        modal.sectionid = section?._id || undefined
        modal.info.name = section?.name || ''
        modal.info.count = section?.count || 0
      }


      return {
        data,
        sectionModal,
        open,
        edit,
        remove,
        update,
        add,
      }
    }
  })

</script>

<style scoped lang='less'>
  .add-btn {
    margin: 20px 0 5px 0;
  }
</style>