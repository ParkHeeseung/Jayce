import React, { Fragment } from 'react'
import { Container } from 'react-grid-system'

import Footer from '../../Navigations/Footer'
import Header from '../../Navigations/Header'

export interface PropsDefaultLayout {
  children: React.ReactNode
}

const App: React.FunctionComponent = ({ children }: PropsDefaultLayout) => {
  return (
    <Fragment>
      <Container fluid>
        <Header />
      </Container>
      <div>{children}</div>
      <Container fluid>
        <Footer />
      </Container>
    </Fragment>
  )
}

export default App
