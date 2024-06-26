import React from 'react'
import ReactDOM from 'react-dom/client'

import About from './components/molecules/about/about'
import Blog from './components/molecules/blog/blog'
import Footer from './components/molecules/footer/footer'
import Header from './components/molecules/header/header'
import Links from './components/molecules/links/links'
import Navbar from './components/molecules/navbar/navbar'
import Portfolio from './components/molecules/portfolio/portfolio'
import Stats from './components/molecules/stats/stats'

import './assets/style/app.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />

    <Header />
    <Portfolio />
    <Stats />
    <Blog />
    <About />
    <Links />

    <Footer />
  </React.StrictMode>
)
