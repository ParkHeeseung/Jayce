import React from 'react'
import { Container } from 'react-grid-system'

import Footer from '../../Navigations/Footer'
import Header from '../../Navigations/Header'

export interface PropsDefaultLayout {
  children: React.ReactNode
}

const App: React.FunctionComponent = ({ children }: PropsDefaultLayout) => {
  return (
    <Container>
      <Header />
      <div>{children}</div>
      <Footer />
    </Container>
  )
}

export default App
