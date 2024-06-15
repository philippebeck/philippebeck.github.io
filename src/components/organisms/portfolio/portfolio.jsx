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
        heading={content.portfolio.heading}
        icon={content.portfolio.icon}
        subtitle={content.portfolio.subtitle}
      />

      { portfolio.map((project, index) =>
        <Gallery
          key={index}
          title={project.title}
          gallery={project.gallery}
        />
      )}
    </article>
  )
}

export default Portfolio
