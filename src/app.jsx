import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style/app.scss'

import Navbar from './components/organisms/navbar/navbar'
import Header from './components/organisms/header/header'
import Portfolio from './components/organisms/portfolio/portfolio'
import Stats from './components/organisms/stats/stats'
import Blog from './components/organisms/blog/blog'
import About from './components/organisms/about/about'
import Tools from './components/organisms/tools/tools'
import Footer from './components/organisms/footer/footer'

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
