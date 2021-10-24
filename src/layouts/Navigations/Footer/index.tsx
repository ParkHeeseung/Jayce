import React from 'react'

import GithubIcon from '../../../assets/images/icons/github.png'
import InstargramIcon from '../../../assets/images/icons/instargram.png'
import LinkedInIcon from '../../../assets/images/icons/linkedIn.png'
import YoutubeIcon from '../../../assets/images/icons/youtube.png'
import JayceSrc from '../../../assets/images/jayce.png'
import Image from '../../../components/atom/Image'
import Text from '../../../components/atom/Text'
import useRootData from '../../../hooks/useRootData'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

interface LinkIcon {
  icon: string
  link: string
}

const App: React.FunctionComponent = () => {
  const { isDesktopView } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
  }))

  const styles = isDesktopView ? stylesDesktop : stylesMobile

  const linkIconArray: Array<LinkIcon> = [
    {
      icon: GithubIcon,
      link: 'https://github.com/parkheeseung',
    },
    {
      icon: LinkedInIcon,
      link: 'https://www.linkedin.com/in/%ED%9D%AC%EC%8A%B9-%EB%B0%95-b05058175/',
    },
    {
      icon: YoutubeIcon,
      link: 'https://www.youtube.com/channel/UCir3YHb8o_XFfHDFT53Bymw',
    },
    {
      icon: InstargramIcon,
      link: 'https://www.instagram.com/huiseung_park/?hl=ko',
    },
  ]

  const linkIconClickHandler = (link: string): void => {
    window.open(link, '_blank')
  }

  return (
    <footer className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.leftBox}>
          <Image className={styles.logo} src={JayceSrc}></Image>
          <Text className={styles.thanksText} text={'Thanks for reading!'}></Text>
          <Text className={styles.copyRightText} text={'© Jayce Park 2021'}></Text>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.iconBox}>
            {linkIconArray.map((item, index) => {
              const { icon, link } = item

              return (
                <Image
                  className={styles.icon}
                  key={index}
                  src={icon}
                  clickHandler={(): void => linkIconClickHandler(link)}
                ></Image>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
