import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'

// import useRootData from './hooks/useRootData'
import Landing from './pages/Landing'

const App: React.FunctionComponent = () => {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    // scroll up to top when switching pages
    window.scrollTo(0, 0)
  }, [history, location])

  return (
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  )
}

export default App
