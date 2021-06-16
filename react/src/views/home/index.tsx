import { Layout, Menu } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import routes from 'router'
import HomeHeader from './header'

const { Header, Content, Sider } = Layout


const HomePage = () => {

  return (
    <Router>
      <Layout style={{ height: "100%" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          collapsible
        >
          <div style={{ 
            color: "#fff", 
            fontSize: "18px", 
            textAlign: "center",
            margin: "10px 0" 
          }}>
            工资管理系统
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {/* 路由link */}
            {
              routes.map(route => (
                <Menu.Item key={route.key} icon={route.icon}>
                  <Link to={route.path}>{ route.title }</Link>
                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>

      <Layout>
        <Header className="site-layout-sub-header-background">
          <HomeHeader />
        </Header>

        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* 路由配置 */}
            <Switch>
              {
                routes.map(route => (
                  <Route
                    path={ route.path }
                    component={ route.component }
                    exact={ route.exact }
                    key={ route.key }
                  ></Route>
                ))
              }
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
    </Router>
  )
}


export default HomePage