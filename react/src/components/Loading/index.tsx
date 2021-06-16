import { Spin } from 'antd'
import 'components/Loading/index.less'

const Loading = () => {

  return (
    <div className="loading">
      <Spin />
    </div>
  )
}

export default Loading