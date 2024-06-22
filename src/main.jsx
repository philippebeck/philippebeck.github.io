import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './components/molecules/navbar/navbar'
import Header from './components/molecules/header/header'
import Footer from './components/molecules/footer/footer'

import Portfolio from './components/organisms/portfolio/portfolio'
import Stats from './components/organisms/stats/stats'
import Blog from './components/organisms/blog/blog'
import About from './components/organisms/about/about'
import Links from './components/organisms/links/links'

import './main.scss'

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
