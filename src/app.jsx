import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, Footer } from 'reactoms'

import Header from './components/header/header'
import Portfolio from './components/portfolio/portfolio'
import Stats from './components/stats/stats'
import Blog from './components/blog/blog'
import About from './components/about/about'
import Tools from './components/tools/tools'

import data from './assets/data.json'
import './assets/style/app.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar array={data.nav}/>

    <Header />
    <Portfolio />
    <Stats />
    <Blog />
    <About />
    <Tools />

    <Footer array={data.footer}/>
  </React.StrictMode>
)
