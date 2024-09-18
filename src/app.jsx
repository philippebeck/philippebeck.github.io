import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Portfolio from './components/portfolio/portfolio'
import Stats from './components/stats/stats'
import Blog from './components/blog/blog'
import About from './components/about/about'
import Tools from './components/tools/tools'
import Footer from './components/footer/footer'
import './assets/style/app.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Portfolio />
    <Stats />
    <Blog />
    <About />
    <Tools />
    <Footer />
  </React.StrictMode>
)
