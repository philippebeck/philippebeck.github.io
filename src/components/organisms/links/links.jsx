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
        title="Links"
        cat="solid"
        icon="link"
        subtitle={content.links}
      />

      <Title
        title="HTML"
        lvl="3"
        icon="html5"
      />
      <List array={links.html} />

      <Title
        title="CSS"
        lvl="3"
        icon="css3"
      />
      <List array={links.css} />

      <Title
        title="JS"
        lvl="3"
        icon="square-js"
      />
      <List array={links.js} />

      <Title
        title="Vue"
        lvl="3"
        icon="vuejs"
      />
      <List array={links.vue} />

      <Title 
        title="Node"
        lvl="3"
        icon="node-js"
      />
      <List array={links.node} />

      <Title
        title="PHP"
        lvl="3"
        icon="php"
      />
      <List array={links.php} />

      <Title
        title="Python"
        lvl="3"
        icon="python"
      />
      <List array={links.python} />

      <Title
        title="DB"
        lvl="3"
        icon="database"
        cat="solid"
      />
      <List array={links.db} />

      <Title
        title="Git"
        lvl="3"
        icon="square-git"
      />
      <List array={links.git} />

      <Title
        title="Dev"
        lvl="3"
        icon="dev"
      />
      <List array={links.dev} />
    </article>
  )
}

export default Links
