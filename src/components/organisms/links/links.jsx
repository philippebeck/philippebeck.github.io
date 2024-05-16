import { content, links } from '../../../assets/data.json'
import List from '../../molecules/list/list'
import Title from '../../atoms/title/title'
import './links.css'

const Links = () => {

  return (
    <article id="links">
      <Title title="Links" subtitle={content.links} />

      <Title title="HTML" lvl="3" />
      <List array={links.html} />

      <Title title="CSS" lvl="3" />
      <List array={links.css} />

      <Title title="JS" lvl="3" />
      <List array={links.js} />

      <Title title="Vue" lvl="3" />
      <List array={links.vue} />

      <Title title="Node" lvl="3" />
      <List array={links.node} />

      <Title title="PHP" lvl="3" />
      <List array={links.php} />

      <Title title="Python" lvl="3" />
      <List array={links.python} />

      <Title title="DB" lvl="3" />
      <List array={links.db} />

      <Title title="Git" lvl="3" />
      <List array={links.git} />

      <Title title="Dev" lvl="3" />
      <List array={links.dev} />
    </article>
  )
}

export default Links
