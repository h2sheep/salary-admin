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
        <section-select @change="onSectionChange" !showAllOptions />
      </div>

      <div class="modal-label">
        <span>职位: </span>
        <a-input v-model:value="info.job" size="large" class="modal-input" />
      </div>

      <div class="modal-label">
        <span>工资: </span>
        <a-input v-model:value="info.salary" type="number" size="large" class="modal-input" />
      </div>

    </a-modal>
  </div>
</template>

<script lang="ts">

  import { IBaseStaff, IStaff, STAFF_GENDER } from '@/typings/staff'
  import { defineComponent, reactive, getCurrentInstance, ComponentInternalInstance, onMounted, toRefs } from 'vue'

  import SectionSelect from './SectionSelect.vue'

  export default defineComponent({
    components: {
      SectionSelect
    },
    emits: ['add', 'update'],
    setup(props, { emit }) {

      const { proxy } = getCurrentInstance() as ComponentInternalInstance

      // 显示控制
      const state = reactive({
        show: false,
        mode: 'edit'
      })

      const GENDER = {
        MALE: STAFF_GENDER.MALE,
        FEMALE: STAFF_GENDER.FEMALE
      }

      // 表单
      const info = reactive({
        staffid: '',
        sectionid: '',
        name: '',
        age: 18,
        gender: GENDER.MALE,
        job: '',
        salary: 0
      })  

      // 取消空格
      const onTextchange = () => {
        info.name = info.name.trim()
        info.job = info.job.trim()
      }
      // 获取部门id
      const onSectionChange = (sectionid: string) => info.sectionid = sectionid

      onMounted(() => {
        // 监听编辑事件
        proxy?.$bus.on<IStaff>('editStaff', (staff) => {
          _setInfo(staff)
          state.mode = 'edit'
        })
        // 监听添加事件
        proxy?.$bus.on<IStaff>('addStaff', () => {
          _setInfo()
          state.mode = 'add'
        })
      })

      function _setInfo(staff?: IStaff) {
        info.staffid = staff?.staffid || ''
        info.sectionid = staff?.sectionid || ''
        info.name = staff?.name || ''
        info.age = staff?.age || 18
        info.gender = staff?.gender || GENDER.MALE
        info.job = staff?.job || ''
        info.salary = staff?.salary || 0
        state.show = true
      }

      const handleOk = () => {
        if (!info.name) return proxy?.$message.warn('请填写姓名')
        if (!info.sectionid) return proxy?.$message.warn('请选择部门')
        if (!info.job) return proxy?.$message.warn('请填写职位')

        // 修改
        if (info.staffid) {
          const staff: IStaff = {
            staffid: info.staffid,
            sectionid: info.sectionid,
            name: info.name,
            age: info.age * 1,
            gender: info.gender,
            job: info.job,
            salary: info.salary * 1
          }

          emit('update', staff)
        } else {
          const staff: IBaseStaff = {
            sectionid: info.sectionid,
            name: info.name,
            age: info.age * 1,
            gender: info.gender,
            job: info.job,
            salary: info.salary * 1
          }
          
          emit('add', staff)
        }

        // 关闭弹窗
        state.show = false  
      }

      return {
        GENDER,
        ...toRefs(state),
        info,
        handleOk,
        onTextchange,
        onSectionChange
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

