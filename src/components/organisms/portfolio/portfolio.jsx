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

                <List
                  list={project.gallery.map((item, i) =>

                    <Link
                      key={i}
                      url={item.url}
                      title={item.detail}
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
          </li>
        )}
      </ul>
    </article>
  )
}

export default Portfolio
