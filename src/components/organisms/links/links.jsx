import { links } from '../../../assets/data.json'

import Collapse from '../../molecules/collapse/collapse'
import List from '../../molecules/list/list'
import Title from '../../molecules/title/title'

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
        icon={links.title.icon}
        subtitle={links.title.subtitle}
      />

      {links.data.map((link, index) =>

        <Collapse
          key={index}
          title={link.title}
          content={

            <List array={link.list} />
          }
        />
      )}
    </article>
  )
}

export default Links
