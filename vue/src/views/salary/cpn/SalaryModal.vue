<template>
  <div>
    <a-modal
      title="员工信息"
      v-model:visible="show"
      @ok="handleOk"
      ok-text="确认"  cancel-text="取消"
    >

      <div class="modal-label">
        <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名: </span>
        <a-input  v-model:value="info.name" class="modal-input" size="large" @change="onTextchange" disabled />
      </div>

      <div class="modal-label">
        <span>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位: </span>
        <a-input v-model:value="info.job" size="large" class="modal-input" disabled />
      </div>

      <div class="modal-label">
        <span>基础工资: </span>
        <a-input v-model:value="info.base" size="large" type="number" class="modal-input" />
      </div>

      <div class="modal-label">
        <span>绩效奖金: </span>
        <a-input v-model:value="info.extra" size="large" type="number" class="modal-input" />
      </div>

      <div class="modal-label">
        <span>加班工资: </span>
        <a-input v-model:value="info.overtime" size="large" type="number" class="modal-input" />
      </div>

      <div class="modal-label">
        <span>全勤奖金: </span>
        <a-input v-model:value="info.fullmonth" size="large" type="number" class="modal-input" />
      </div>

      <div class="modal-label">
        <span>食宿补贴: </span>
        <a-input v-model:value="info.eatandlive" size="large" type="number" class="modal-input" />
      </div>

      <div class="modal-label">
        <span>交通补贴: </span>
        <a-input v-model:value="info.transportation" size="large" type="number" class="modal-input" />
      </div>

    </a-modal>
  </div>
</template>

<script lang="ts">

  import { IEditSalary, IStaff } from '@/typings/staff'
  import { defineComponent, reactive, getCurrentInstance, ComponentInternalInstance, onMounted, toRefs } from 'vue'

  export default defineComponent({
    emits: ['add', 'update'],
    setup(props, { emit }) {

      const { proxy } = getCurrentInstance() as ComponentInternalInstance

      // 显示控制
      const state = reactive({
        show: false
      })
      let curStaff: IStaff | {} = {}

      // 表单信息
      const info = reactive<IEditSalary>({
        name: '',
        job: '',
        base: 0,
        eatandlive: 0,
        extra: 0,
        fullmonth: 0,
        overtime: 0,
        transportation: 0
      })

      // 取消空格
      const onTextchange = () => {
        info.name = info.name.trim()
        info.job = info.job.trim()
      }

      onMounted(() => {
        // 监听编辑事件
        proxy?.$bus.on<IStaff>('editSalary', (staff) => {
          curStaff = staff!
          info.name = staff!.name,
          info.job = staff!.job,
          info.base = staff!.base,
          info.eatandlive = staff!.eatandlive,
          info.extra = staff!.extra,
          info.fullmonth = staff!.fullmonth,
          info.overtime = staff!.overtime,
          info.transportation = staff!.transportation 
          state.show = true
        })
      })


      const handleOk = () => {
        const sum = info.base * 1 + info.eatandlive * 1 + info.extra * 1 + info.fullmonth * 1 + info.overtime * 1 + info.transportation * 1   
        // 修改
        curStaff = {...curStaff, ...info, salary: sum}

        emit('update', curStaff)

        // 关闭弹窗
        state.show = false  
      }

      return {
        ...toRefs(state),
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

