import { portfolio } from '../../../assets/data.json'

import Card from '../../atoms/card/card'
import Collapse from '../../atoms/collapse/collapse'
import Heading from '../../molecules/heading/heading'
import Icon from '../../atoms/icon/icon'
import Image from '../../atoms/image/image'
import Link from '../../atoms/link/link'
import List from '../../atoms/list/list'
import Title from '../../atoms/title/title'

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
      <Heading title={title} />

      <List
        array={data.map((project) =>
          <Collapse
            title={
              <Heading title={project.title} />
            }
            content={
              <List
                array={project.gallery.map((item) =>
                  <Link
                    url={item.url}
                    title={item.detail}
                    content={
                      <Card
                        caption={
                          <>
                            <Title heading={item.caption.title} />
                            <List
                              array={item.caption.technos.map((techno) =>
                                <Icon
                                  name={techno}
                                  option="lg"
                                  isHidden="false"
                                />
                              )}
                            />
                          </>
                        }
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
