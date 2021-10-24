import React from 'react'

import useRootData from '../../../hooks/useRootData'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

const App: React.FunctionComponent = () => {
  const { isDesktopView } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
  }))

  const styles = isDesktopView ? stylesDesktop : stylesMobile

  return <div className={styles.contaier}>Footer</div>
}

export default App
