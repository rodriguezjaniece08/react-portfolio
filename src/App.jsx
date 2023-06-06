import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <ChakraProvider>
      <Header/>
      <Nav/>
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      </ChakraProvider>
    </>
  )
}

export default App
     
