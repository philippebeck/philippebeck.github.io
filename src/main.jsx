import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './components/organisms/navbar/navbar'
import Header from './components/organisms/header/header'
import Blog from './components/organisms/blog/blog'
import Portfolio from './components/organisms/portfolio/portfolio'
import Links from './components/organisms/links/links'
import Footer from './components/organisms/footer/footer'

import './assets/app.scss'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Portfolio />
    <Blog />
    <Links />
    <Footer />
  </React.StrictMode>
)
