import { links } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Link from '../../atoms/link/link'
import List from '../../atoms/list/list'
import Title from '../../atoms/title/title'

import Collapse from '../../molecules/collapse/collapse'

import './links.scss'

/**
 * ? LINKS ORGANISM
 * * Renders the Links Organism
 * * that displays a list of links
 *
 * @return {JSX.Element}
 *  The rendered Links Organism.
 */
const Links = () => {
  const { title, data } = links;

  return (
    <article id="links">

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
        array={data.map((link) =>

          <Collapse
            title={link.title}
            content={

              <List
                array={link.list.map((item) =>

                  <Link
                    url={item.url}
                    content={item.name}
                    design="btn"
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

export default Links
