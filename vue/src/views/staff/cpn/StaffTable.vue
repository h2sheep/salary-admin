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
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      slots: { customRender: 'gender' },
    },
    {
      title: '职位',
      dataIndex: 'job',      
    },   
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

      const remove = (staff: IStaff) => {
        emit('remove', staff.sectionid, staff.staffid)
      }

      // 编辑事件
      const edit = (staff: IStaff) => {
        proxy?.$bus.emit('editStaff', staff)
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

