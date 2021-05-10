<template>
  <div>
    <a-modal
      title="员工信息"
      v-model:visible="show"
      @ok="handleOk"
      ok-text="确认"  cancel-text="取消"
    >

      <div class="modal-label">
        <span>姓名: </span>
        <a-input  v-model:value="info.name" class="modal-input" size="large" @change="onTextchange" />
      </div>

      <div class="modal-label">
        <span>年龄: </span>
        <a-input v-model:value="info.age" type="number" size="large" class="modal-input" />
      </div>

      <div class="modal-label">
        <span>性别: </span>
        <a-select v-model:value="info.gender">
          <a-select-option :value="GENDER.MALE">男</a-select-option>
          <a-select-option :value="GENDER.FEMALE">女</a-select-option>
        </a-select>
      </div>

      <div class="modal-label" v-if="mode === 'add'">
        <span>部门: </span>
        <a-select v-model:value="info.sectionid" placeholder="选择部门" style="width: 120px">
          <template v-for="section in sectionList" :key="section.sectionid">
            <a-select-option :value="section.sectionid">{{ section.name }}</a-select-option>
          </template>
        </a-select>
      </div>

      <div class="modal-label">
        <span>职位: </span>
        <a-input v-model:value="info.job" size="large" class="modal-input" />
      </div>


    </a-modal>
  </div>
</template>

<script lang="ts">

  import store from '@/store'
  import { IAddStaff, IStaff, STAFF_GENDER } from '@/typings/staff'
  import { defineComponent, reactive, getCurrentInstance, ComponentInternalInstance, onMounted, toRefs, computed } from 'vue'

  export default defineComponent({
    emits: ['add', 'update'],
    setup(props, { emit }) {

      const { proxy } = getCurrentInstance() as ComponentInternalInstance

      // 显示控制
      const state = reactive({
        show: false,
        mode: 'edit'
      })
      let curStaff: IStaff | {} = {}

      // 性别
      const GENDER = {
        MALE: STAFF_GENDER.MALE,
        FEMALE: STAFF_GENDER.FEMALE
      }

      // 表单
      const info = reactive<IAddStaff>({
        sectionid: '',
        name: '',
        age: 18,
        gender: GENDER.MALE,
        job: ''
      })  


      onMounted(() => {
        // 监听编辑事件
        proxy?.$bus.on<IStaff>('editStaff', (staff) => {
          curStaff = staff!
          _setInfo(staff)
          state.mode = 'edit'
        })
        // 监听添加事件
        proxy?.$bus.on<IStaff>('addStaff', () => {
          curStaff = {}
          _setInfo()
          state.mode = 'add'
        })
      })

      function _setInfo(staff?: IStaff) {
        info.sectionid = staff?.sectionid || ''
        info.name = staff?.name || ''
        info.age = staff?.age || 18
        info.gender = staff?.gender || GENDER.MALE
        info.job = staff?.job || ''
        state.show = true
      }

      const handleOk = () => {
        if (!info.name) return proxy?.$message.warn('请填写姓名')
        if (!info.sectionid) return proxy?.$message.warn('请选择部门')
        if (!info.job) return proxy?.$message.warn('请填写职位')

        // 修改
        if (curStaff.hasOwnProperty('staffid')) {
          curStaff = {...curStaff, ...info}
          emit('update', curStaff)
        } 
        
        // 添加
        else {
          emit('add', info)
        }

        // 关闭弹窗
        state.show = false  
      }

      // 取消空格
      const onTextchange = () => {
        info.name = info.name.trim()
        info.job = info.job.trim()
      }

      return {
        GENDER,
        ...toRefs(state),
        sectionList: computed(() => store.state.section.sectionList),
        info,
        handleOk,
        onTextchange,
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

