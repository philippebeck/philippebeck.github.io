import { links } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Link from '../../atoms/link/link'
import List from '../../atoms/list/list'
import Title from '../../atoms/title/title'

import Collapse from '../../molecules/collapse/collapse'

import './links.scss'

/**
 * ? LINKS COMPONENT
 * * Renders a component that displays
 * * a list of links categorized by technology.
 *
 * @return {JSX.Element}
 *  The rendered component.
 */
const Links = () => {
  return (

    <article id="links">
      <Title
        heading={links.title.heading}
        subtitle={links.title.subtitle}
        prefix={

          <Icon
            name={links.title.icon.name}
            cat={links.title.icon.cat}
          />
        }
      />

      <ul>
        {links.data.map((link, index) =>
          <li key={index}>

            <Collapse
              title={link.title}
              content={

                <List
                  list={link.list.map((item, i) =>

                  <Link
                    key={i}
                    url={item.url}
                    content={item.name}
                    design="btn"
                  />
                )}/>
              }
            />
          </li>
        )}
      </ul>
    </article>
  )
}

export default Links
