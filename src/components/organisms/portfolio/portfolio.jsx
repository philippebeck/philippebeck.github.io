import { portfolio } from '../../../assets/data.json'

import Card from '../../atoms/card/card'
import Icon from '../../atoms/icon/icon'
import Image from '../../atoms/image/image'
import Link from '../../atoms/link/link'
import List from '../../atoms/list/list'
import Title from '../../atoms/title/title'

import Collapse from '../../molecules/collapse/collapse'

import './portfolio.scss'

/**
 * ? PORTFOLIO ORGANISM
 * * Renders the Portfolio Organism
 * * that displays a list of projects
 *
 * @return {JSX.Element}
 *  The rendered Portfolio Organism.
 */
const Portfolio = () => {
  const { title, data } = portfolio;

  return (
    <article id="portfolio">

      <Title
        heading={title.heading}
        subtitle={title.subtitle}
        prefix={

          <Icon
            name={title.icon.name}
            cat={title.icon.cat}
          />
        }
      />

      <List
        array={data.map((project) =>

          <Collapse
            title={project.title}
            content={

              <List
                array={project.gallery.map((item) =>

                  <Link
                    url={item.url}
                    label={item.detail}
                    content={

                      <Card
                        caption={item.caption}
                        content={

                          <Image
                            url={item.image.url}
                            alt={item.image.alt}
                          />
                        }
                      />
                    }
                  />
                )}
              />
            }
          />
        )}
      />
    </article>
  )
}

export default Portfolio
