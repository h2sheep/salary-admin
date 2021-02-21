
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
  Table,
  Modal,
  Select,
  Tabs
} from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css';

import { MessageApi } from 'ant-design-vue/lib/message';
import { ModalFunc } from 'ant-design-vue/lib/modal/Modal';


// 对vue进行类型补充说明
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $message: MessageApi // 这里可以用$Api具体的类型代替any
    $confirm: ModalFunc
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
  .use(Table)
  .use(Modal)
  .use(Select)
  .use(Tabs)

  app.config.globalProperties.$message = message
  app.config.globalProperties.$confirm = Modal.confirm
}