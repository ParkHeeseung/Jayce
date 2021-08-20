import appStore from './app'

export interface TypeRootStore {
  appStore: typeof appStore
}

const createRootStore = (): TypeRootStore => {
  return {
    appStore,
  }
}

export default createRootStore
