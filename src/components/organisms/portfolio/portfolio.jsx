import { portfolio } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Title from '../../atoms/title/title'

import Collapse from '../../molecules/collapse/collapse'
import Gallery from '../../molecules/gallery/gallery'

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
        subtitle={portfolio.title.subtitle}
        prefix={

          <Icon
            name={portfolio.title.icon.name}
            cat={portfolio.title.icon.cat}
          />
        }
      />

      <ul>
        {portfolio.data.map((project, index) =>
          <li key={index}>

            <Collapse
              title={project.title}
              content={

                <Gallery
                  array={project.gallery}
                />
              }
            />
          </li>
        )}
      </ul>
    </article>
  )
}

export default Portfolio
