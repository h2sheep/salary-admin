<template>
  <div>
    <a-modal
      title="部门信息"
      v-model:visible="show"
      @ok="handleOk"
      ok-text="确认"
      cancel-text="取消"
    >

    <div class="modal-label">
      <span>部门名称: </span>
      <a-input 
        v-model:value="info.name" 
        class="modal-input" 
        size="large" 
        @change="change"
      />
    </div>

    <div class="modal-label">
      <span>部门人数: </span>
       <a-input v-model:value="info.count" type="number" class="modal-input" size="large" />
    </div>

    </a-modal>
  </div>
</template>

<script lang="ts">

  import { INewSectionRow, ISectionRow } from '@/typings/section'
  import { ref, defineComponent, reactive, getCurrentInstance, ComponentInternalInstance } from 'vue'

  export default defineComponent({
    emits: ['add', 'update'],
    setup(props, { emit }) {

      const { proxy } = getCurrentInstance() as ComponentInternalInstance

      // 是否显示对话框
      const show = ref<boolean>(false)
      // sectionid
      const sectionid = ref<string | undefined>(undefined)
      // 表单
      const info = reactive({
        name: '',
        count: 0
      })  

      const change = () => {
        info.name = info.name.trim()
      }

      const handleOk = () => {
        
        if (!info.name) return proxy?.$message.warn('请填写部门名称')

        // 有sectionid就修改
        if (typeof sectionid.value === 'string') {
          const section: ISectionRow = {
            _id: sectionid.value,
            name: info.name,
            count: info.count * 1
          }
          emit('update', section)
        } 
        
        // 没有就添加
        else {
          const newSection: INewSectionRow = {
            name: info.name,
            count: info.count * 1
          }
          emit('add', newSection)
        }

        // 关闭弹窗
        show.value = false  
      }

      return {
        sectionid,
        show,
        info,
        handleOk,
        change
      }
    }
  })
</script>

<style lang="less" scoped>
  .modal-label {
    display: flex;
    align-items: center;
    margin: 10px 0;

    span {
      margin-right: 10px;
      white-space: nowrap;
    }
  }
</style>

