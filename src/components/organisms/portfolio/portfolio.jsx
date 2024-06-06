import { content, portfolio } from '../../../assets/data.json'

import Gallery from '../../molecules/gallery/gallery'
import Title from '../../molecules/title/title'

import './portfolio.scss'

/**
 * ? PORTFOLIO COMPONENT
 * * Renders the Portfolio component.
 *
 * @return {JSX.Element}
 *  The rendered Portfolio component.
 */
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
