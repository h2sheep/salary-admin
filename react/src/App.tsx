import { lazy, Suspense, useContext } from 'react'
import Loading from 'components/Loading'
import { AppContext } from 'store'
import './App.less'

const UnAuthApp = lazy(() => import('unAuth-app'))
const HomePage = lazy(() => import('views/home'))



function App() {

  const context = useContext(AppContext)

  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        {
          context?.user.token ?  <HomePage /> : <UnAuthApp />
        }
      </Suspense>
    </div>
  )
}

export default App;
