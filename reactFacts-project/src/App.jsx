import './App.css'
import { Fragment } from 'react';
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Fragment>
      <Header />  
      <MainContent />
      <Footer />
    </Fragment>
  )
}

export default App
