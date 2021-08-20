import { observable } from 'mobx'

import history from '../utils/history'

const theFirstURL = window.location.pathname.substring(1)

const createStore = (): typeof appStore => {
  const appStore = {
    // Initial state
    currentMainMenu: observable.box(theFirstURL),

    // Change menu
    changeMainMenu(data: string): void {
      appStore.currentMainMenu.set(data)
      history.push(data)
    },
  }

  return appStore
}

const store = createStore()
export default store
