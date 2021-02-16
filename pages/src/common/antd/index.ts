
import { App } from 'vue';

import {
  Button, 
  message, 
  Form,
  Input, 
  Row,
  Col,
  Avatar,
  Dropdown,
  Menu,
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import { MessageApi } from 'ant-design-vue/lib/message';


// // 对vue进行类型补充说明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: MessageApi // 这里可以用$Api具体的类型代替any
  }
}

export function importAntd(app: App<Element>) {
  app
  .use(Button)
  .use(Form)
  .use(Input)
  .use(Row)
  .use(Col)
  .use(Avatar)
  .use(Dropdown)
  .use(Menu)

  app.config.globalProperties.$message = message
}