import { FC, ReactElement } from "react"
import { Form, Input, Button, message } from 'antd'
import { useContext } from "react"
import { AppContext } from "store"

// 布局样式
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
}

const LoginPage: FC = (): ReactElement => {
  const context = useContext(AppContext)

  // 提交登录表单
  const onFinish = (values: any) => {
    context?.login(values)
      .then(res => {
        message.success(res)
      })
      .catch(err => message.warning(err))
  }

  return (
    <>
      <Form
        {...layout}
        onFinish={onFinish}
      >
        <Form.Item
          label="用户名" name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码" name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginPage