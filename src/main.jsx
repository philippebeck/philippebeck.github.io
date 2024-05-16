import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/organisms/nav/nav'
import Header from './components/organisms/header/header'
import Blog from './components/organisms/blog/blog'
import Portfolio from './components/organisms/portfolio/portfolio'
import Links from './components/organisms/links/links'
import Footer from './components/organisms/footer/footer'
import './assets/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Header />
    <hr />
    <Portfolio />
    <hr />
    <Blog />
    <hr />
    <Links />
    <Footer />
  </React.StrictMode>
)
