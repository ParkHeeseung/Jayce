import { observable } from 'mobx'

import history from '../../utils/history'

const theFirstURL = window.location.pathname.substring(1)

const createStore = (): typeof appStore => {
  const appStore = {
    // Initial state
    currentMainMenu: observable.box(theFirstURL),
    screenClass: observable.box(window.screen.width > 750 ? 'xl' : 'xs'),

    // Getter
    get isDesktopView(): boolean {
      const screenClass = appStore.screenClass.get()

      return screenClass === 'xl'
    },

    // Setter
    changeMainMenu(data: string, doNotPush = false): void {
      appStore.currentMainMenu.set(data[0] === '/' ? data.substring(1) : data)

      if (doNotPush) return
      history.push(data)
    },
    changeScreenClass(data: string): void {
      appStore.screenClass.set(data)
    },
  }

  return appStore
}

const store = createStore()
export default store
