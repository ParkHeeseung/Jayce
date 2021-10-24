import React from 'react'

import JayceSrc from '../../../assets/images/jayce.png'
import Image from '../../../components/atom/Image'
import Text from '../../../components/atom/Text'
import useRootData from '../../../hooks/useRootData'
import { PageEnum } from '../../../stores/app/type'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

interface MainMenu {
  page: PageEnum
  path: string
}

const App: React.FunctionComponent = () => {
  const { isDesktopView, changeMainMenu } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
    changeMainMenu: appStore.changeMainMenu,
  }))

  const styles = isDesktopView ? stylesDesktop : stylesMobile

  const mainMenuArray: Array<MainMenu> = [
    {
      page: PageEnum.HOME,
      path: '/',
    },
    {
      page: PageEnum.ABOUT,
      path: '/about',
    },
    {
      page: PageEnum.CODE,
      path: '/code',
    },
    {
      page: PageEnum.CAREER,
      path: '/career',
    },
    {
      page: PageEnum.CONTACT,
      path: '/contact',
    },
  ]

  const mainMenuClickHandler = (path: string): void => changeMainMenu(path)

  return (
    <header className={styles.container}>
      <Image
        className={styles.logo}
        src={JayceSrc}
        clickHandler={(): void => mainMenuClickHandler(mainMenuArray[0].path)}
      ></Image>
      <div className={styles.menuButtonGroup}>
        {mainMenuArray.map((item, index) => {
          const { page, path } = item

          return (
            <Text
              key={index}
              className={styles.menuButton}
              text={page}
              clickHandler={(): void => mainMenuClickHandler(path)}
            ></Text>
          )
        })}
      </div>
    </header>
  )
}

export default App
