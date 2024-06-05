import { content, portfolio } from '../../../assets/data.json'

import Gallery from '../../molecules/gallery/gallery'
import Title from '../../molecules/title/title'

import './portfolio.scss'

const Portfolio = () => {
  return (

    <article id="portfolio">
      <Title
        title="Portfolio"
        icon="images"
        cat="regular"
        subtitle={content.portfolio}
      />

      <Gallery 
        name="Packages"
        gallery={portfolio.packages}
        icon="cubes"
        cat="solid"
      />

      <Gallery
        name="Websites"
        gallery={portfolio.websites}
        icon="sitemap"
        cat="solid"
      />
    </article>
  )
}

export default Portfolio
