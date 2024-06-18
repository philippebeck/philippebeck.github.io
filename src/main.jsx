import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './components/molecules/navbar/navbar'
import Footer from './components/molecules/footer/footer'

import Header from './components/organisms/header/header'
import Blog from './components/organisms/blog/blog'
import Portfolio from './components/organisms/portfolio/portfolio'
import Links from './components/organisms/links/links'
import About from './components/organisms/about/about'

import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />

    <Header />
    <Portfolio />
    <Blog />
    <Links />
    <About />

    <Footer />
  </React.StrictMode>
)
