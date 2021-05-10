
import { App } from "vue"

import mitt, { Emitter } from "mitt"

// 对vue进行类型补充说明
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $bus: Emitter
  }
}

export function importEmitter(app: App<Element>) {
  //挂载事务总线
  app.config.globalProperties.$bus = mitt()
}