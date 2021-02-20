import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { importAntd } from '@/common/antd'

import { importEmitter } from '@/common/mitt'


const app = createApp(App)

importAntd(app)
importEmitter(app)

app
  .use(router)
  .use(store)
  .mount('#app')
