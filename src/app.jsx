import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, Footer } from 'reactoms'

import Header from './components/header/header'
import Portfolio from './components/portfolio/portfolio'
import Skills from './components/skills/skills'
import Blog from './components/blog/blog'
import About from './components/about/about'

import data from './assets/data.json'
import './assets/app.scss'

const { nav, footer } = data

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar
      brand={nav.brand}
      links={nav.links}
      contact={nav.contact}
    />

    <Header />
    <Portfolio />
    <Skills />
    <Blog />
    <About />

    <Footer
      id="contact"
      links={footer}
    />
  </React.StrictMode>
)
