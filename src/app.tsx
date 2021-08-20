import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'

// import useRootData from './hooks/useRootData'
import Landing from './pages/Landing'

const App: React.FunctionComponent = () => {
  const history = useHistory()
  const location = useLocation()
  // const { isReady, updateAuthInfo, updateSession } = useRootData(({ authStore }) => ({
  //   updateAuthInfo: authStore.updateAuthInfo,
  //   updateSession: authStore.updateSession,
  //   isReady: authStore.isReady.get(),
  // }))

  // useEffect(() => {
  //   updateSession()
  //   updateAuthInfo()
  // }, [])

  // Run this code whenever do re-route. You might send a pageview of GA here!
  useEffect(() => {
    // scroll up to top when switching pages
    window.scrollTo(0, 0)
  }, [history, location])

  // if (!isReady) return null

  // Caramora for Admin
  return (
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  )
}

export default App
