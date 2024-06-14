import { content, links } from '../../../assets/data.json'

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
        title={content.links.title}
        cat={content.links.cat}
        icon={content.links.icon}
        subtitle={content.links.subtitle}
      />

      { links.map((link, index) =>

      <section key={index}>
        <Title
          title={link.title.name}
          lvl={link.title.lvl}
          icon={link.title.icon}
          cat={link.title.cat}
        />

        <List array={link.list} />
        </section>
      )}
    </article>
  )
}

export default Links
