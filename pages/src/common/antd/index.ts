
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

  app.config.globalProperties.$message = message;
}