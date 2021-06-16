import { FC, ReactElement } from "react"
import { Form, Input, Button, message } from 'antd'
import { useContext } from "react"
import { AppContext } from "store"

// 表单样式
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
}

interface IRegisterForm {
  nickname: string
  username: string
  password1: string
  password2: string
}

interface IProps {
  toggleTab: () => void
}

const RegisterPage: FC<IProps> = ({ toggleTab }): ReactElement => {

  const context= useContext(AppContext)

  // 提交注册表单
  const onFinish = async (values: IRegisterForm) => {
    const registerUser = {
      nickname: values.nickname,
      username: values.username,
      password: values.password1
    }
    
    context?.register(registerUser)
      .then(res => {
        message.success(res)
        toggleTab()
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
          label="昵称" name="nickname"
          rules={[{ required: true, message: '请输入昵称!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="用户名" name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码" name="password1"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="确认密码" name="password2"
          dependencies={['password1']}
          rules={[
            { 
              required: true, 
              message: "请再次输入密码!"
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password1') === value) return Promise.resolve()
                return Promise.reject(new Error('两次密码输入不一致!'))
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default RegisterPage