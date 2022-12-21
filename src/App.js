import React from 'react'
import './App.css'

import { Chef, DeliList, Footer, Form, Header, Offers } from './containers'
import { Navbar } from './components'

const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Offers />
        <Chef />
        <DeliList />
        <Form />
        <Footer />
    </div>
  )
}

export default App