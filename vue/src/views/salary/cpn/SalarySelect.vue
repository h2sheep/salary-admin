<template>
  <a-select v-model:value="state.curSectionid">
    <a-select-option value="" v-if="showAllOptions">所有部门</a-select-option>
    <template
      v-for="section in list" :key="section.sectionid"
    >
      <a-select-option :value="section.sectionid">{{ section.name }}</a-select-option>
    </template>
  </a-select>
</template>

<script lang='ts'>

  import { computed, defineComponent, reactive, watch } from 'vue'
  import { useStore } from 'vuex'
  import { useSection } from '@/hooks/section'
  import { IGlobalState } from '@/store'

  export default defineComponent({
    props: {
      showAllOptions: Boolean
    },
    emits: ['change'],
    setup(props, { emit }) {

      const store = useStore<IGlobalState>()

      const state = reactive({
        curSectionid: ''
      })

      // 获取部门列表
      const list = computed(() => store.state.section.sectionList)
      const { setSectionList } = useSection()
      setSectionList()

      // 监听切换
      watch(() => state.curSectionid, (val, preVal) => {
        if (val !== preVal) emit('change', val)
      })

      return {
        state,
        list
      }
    }
  })

</script>