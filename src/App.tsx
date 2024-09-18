// import React, {useEfeect, useState} from 'react';
import AddProducts from './components/AddProducts'
import FetchProducts from './components/FetchProducts'
import Footer from './components/Footer'
import Nav from './components/Nav'



function App () {

  return (
  <>
    <Nav />
    <FetchProducts />
    <AddProducts />
    <Footer />
  </>
)
}
export default App
