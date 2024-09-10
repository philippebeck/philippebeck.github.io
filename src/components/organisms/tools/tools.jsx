import { Collapse, List } from 'reactoms'
import { tools } from '../../../assets/data.json'
import Heading from '../../molecules/heading/heading'
import Links from '../../molecules/links/links'
import './tools.scss'

/**
 * ? TOOLS ORGANISM
 * * Renders the Tools Organism that displays some nested lists of tools
 *
 * @return {JSX.Element} - The rendered Tools Organism.
 */
const Tools = () => {
  const { title, data } = tools;

  return (
    <article id="tools">
      <Heading title={title} />

      <List
        array={data.map((tool) =>
          <Collapse
            title={<Heading title={tool.title} />}
            content={<Links array={tool.list} />}
          />
        )}
      />
    </article>
  )
}

export default Tools
