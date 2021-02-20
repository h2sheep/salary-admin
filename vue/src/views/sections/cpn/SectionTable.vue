<template>
  <a-table :columns="columns" :data-source="data" :rowKey="record => record.sectionid">

    <template #action="{ record }">
      <a-button class="edit" @click="edit((record))" >编辑</a-button>
      <a-button type="danger" @click="remove((record.sectionid))">删除</a-button>
    </template>

  </a-table>
</template>
<script lang="ts">

  import { ISection } from '@/typings/section';
  import { ComponentInternalInstance, defineComponent, getCurrentInstance, PropType } from 'vue';

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
      data: Array as PropType<ISection[]>
    },
    emits: ['remove'],
    setup(props, { emit }) {

      const { proxy } = getCurrentInstance() as ComponentInternalInstance

      const remove = (sectionid: string) => {
        proxy?.$confirm({
          title: '确定删除该部门吗?',
          content: '删除后相关信息不可恢复',
          okText: '确认',
          cancelText: '取消',
          onOk() {
            emit('remove', sectionid)
          },
          onCancel() {},
        })
      }

      // 编辑事件
      const edit = (section: ISection) => {
        proxy?.$bus.emit('editSectionItem', section)
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

