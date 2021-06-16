import { Button } from 'antd'
import { useContext } from 'react'
import { AppContext } from 'store'

const HomeHeader = () => {

  const context = useContext(AppContext)

  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        color: "#fff",
      }}>
        <span>管理员：{ context?.user.nickname }</span>
        <Button size="small" type="link" onClick={() => context?.logout()}>登出</Button>
      </div>
    </>
  )
}

export default HomeHeader