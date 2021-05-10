<template>
  <a-table :columns="columns" :data-source="data" :rowKey="record => record.staffid">

    <template #gender="{ record }">
      <span>{{  record.gender === GENDER.MALE ? '男' : '女'}}</span>
    </template>

    <template #action="{ record }">
      <a-button class="edit" @click="edit(record)" >编辑</a-button>
      <a-button type="danger" @click="remove(record)">删除</a-button>
    </template>

  </a-table>
</template>
<script lang="ts">

  import { IStaff, STAFF_GENDER } from '@/typings/staff';
  import { ComponentInternalInstance, defineComponent, getCurrentInstance, PropType } from 'vue';

  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '职位', dataIndex: 'job' },   
    { title: '基础工资', dataIndex: 'base' },
    { title: '绩效奖金', dataIndex: 'extra' },
    { title: '加班工资', dataIndex: 'overtime' },
    { title: '全勤奖', dataIndex: 'fullmonth' },
    { title: '食宿补贴', dataIndex: 'eatandlive' },
    { title: '交通补贴', dataIndex: 'transportation' },
    { title: '总共工资', dataIndex: 'salary' },
    {
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    }
  ]


  export default defineComponent({
    props: {
      data: Array as PropType<IStaff[]>
    },
    emits: ['remove'],
    setup(props, { emit }) {

      const { proxy } = getCurrentInstance() as ComponentInternalInstance

      const GENDER = {
        MALE: STAFF_GENDER.MALE,
        FEMALE: STAFF_GENDER.FEMALE
      }

      // 删除事件
      const remove = (staff: IStaff) => {
        emit('remove', staff.sectionid, staff.staffid)
      }

      // 编辑事件
      const edit = (staff: IStaff) => {
        proxy?.$bus.emit('editSalary', staff)
      }

      return {
        GENDER,
        columns,
        edit,
        remove
      }
    }
  })
</script>

<style lang="less" scoped>
  .edit {
    margin-right: 10px;
  }
</style>

