<template>
  <div>
    <a-modal
      v-model:visible="show" 
      @ok="handleOk" 
      title="部门信息" ok-text="确认" cancel-text="取消"
    >

    <div class="modal-label">
      <span>部门名称: </span>
      <a-input 
        v-model:value="state.name" 
        class="modal-input" size="large" 
        @change="onTextchange"
      />
    </div>

    <div class="modal-label">
      <span>部门人数: </span>
       <a-input 
        :value="state.count" 
        type="number" size="large" class="modal-input"  
        disabled
       />
    </div>

    </a-modal>
  </div>
</template>

<script lang="ts">

  import { ISection } from '@/typings/section'
  import { ref, defineComponent, reactive, getCurrentInstance, ComponentInternalInstance } from 'vue'

  export default defineComponent({
    emits: ['add', 'update'],
    setup(props, { emit }) {

      const { proxy } = getCurrentInstance() as ComponentInternalInstance

      // 是否显示对话框
      const show = ref<boolean>(false)

      const state = reactive<ISection>({
        sectionid: '',
        name: '',
        count: 0
      })

      // 事件总线监听编辑事件
      proxy?.$bus.on<ISection>('editSectionItem', (section) => {
        state.sectionid = section!.sectionid
        state.name = section!.name
        state.count = section!.count
        show.value = true
      })

      // 事件总线监听添加事件
      proxy?.$bus.on('addSectionItem', () => {
        state.sectionid = ''
        state.name = ''
        state.count = 0
        show.value = true
      })

      // 取消空格
      const onTextchange = () => {
        state.name = state.name.trim()
      }

      // 确认按钮
      const handleOk = () => {
        if (!state.name) return proxy?.$message.warn('请填写部门名称')
        // 有sectionid就修改
        state.sectionid ? emit('update', state.sectionid, state.name) : emit('add', state.name)
        // 关闭弹窗
        show.value = false  
      }

      return {
        show,
        state,
        onTextchange,
        handleOk,
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

