import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { importAntd } from '@/common/antd'


const app = createApp(App)

importAntd(app)

app
  .use(router)
  .mount('#app')
