<template>
  <a-table :columns="columns" :data-source="data" :rowKey="record => record._id">

    <template #action="{ record }">
      <a-button class="edit" @click="edit((record))" >编辑</a-button>
      <a-button type="danger" @click="remove((record._id))">删除</a-button>
    </template>

  </a-table>
</template>
<script lang="ts">

  import { ISectionRow } from '@/typings/section';
  import { defineComponent, PropType } from 'vue';

  const columns = [
    {
      title: '部门名称',
      dataIndex: 'name',
    },
    {
      title: '部门人数',
      dataIndex: 'count',
    },
    {
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    }
  ]


  export default defineComponent({
    props: {
      data: Array as PropType<ISectionRow[]>
    },
    emits: ['edit', 'remove'],
    setup(props, { emit }) {

      const remove = (sectionid: string) => {
        emit('remove', sectionid)
      }

      const edit = (section: ISectionRow) => {
        emit('edit', section)
      }

      return {
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

