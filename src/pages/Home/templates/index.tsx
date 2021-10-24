import React from 'react'
import Typed from 'react-typed'

import ProfileSrc from '../../../assets/images/profile.jpg'
import Image from '../../../components/atom/Image'
import Text from '../../../components/atom/Text'
import useRootData from '../../../hooks/useRootData'
import DefaultLayout from '../../../layouts/Layouts/Default'
import stylesDesktop from './Desktop.module.scss'
import stylesMobile from './Mobile.module.scss'

const App: React.FunctionComponent = () => {
  const { isDesktopView } = useRootData(({ appStore }) => ({
    isDesktopView: appStore.isDesktopView,
  }))
  const styles = isDesktopView ? stylesDesktop : stylesMobile

  return (
    <DefaultLayout>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <Image className={styles.profileImage} src={ProfileSrc}></Image>
          <div className={styles.titleTextBox}>
            <Text className={styles.greetingText} text={'Hi, 👋'}></Text>
            <Text className={styles.greetingText} text={"I'm Jayce"}></Text>
          </div>
        </div>
        <Text className={styles.wiseSayingText} text={"Code doesn't lie."}></Text>
        <Typed
          className={styles.myselfText}
          strings={['만족하지 못하면 찜찜함에 잠을 못자는 개발자 "박희승"입니다.']}
          typeSpeed={50}
        />
      </div>
    </DefaultLayout>
  )
}

export default App
