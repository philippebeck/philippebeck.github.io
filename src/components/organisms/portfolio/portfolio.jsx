import { portfolio } from '../../../assets/data.json'

import Collapse from '../../molecules/collapse/collapse'
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
        heading={portfolio.title.heading}
        icon={portfolio.title.icon}
        subtitle={portfolio.title.subtitle}
      />

      { portfolio.data.map((project, index) =>
        <Collapse
          key={index}
          title={project.title}
          content={

            <Gallery
              gallery={project.gallery}
            />
          }
        />
      )}
    </article>
  )
}

export default Portfolio
