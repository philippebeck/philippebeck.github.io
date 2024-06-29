import { tools } from '../../../assets/data.json'

import Collapse from '../../atoms/collapse/collapse'
import Heading from '../../molecules/heading/heading'
import Link from '../../atoms/link/link'
import List from '../../atoms/list/list'

import './tools.scss'

/**
 * ? TOOLS ORGANISM
 * * Renders the Tools Organism 
 * * that displays some nested lists of links
 *
 * @return {JSX.Element}
 *  The rendered Tools Organism.
 */
const Tools = () => {
  const { title, data } = tools;

  return (
    <article id="tools">
      <Heading title={title} />

      <List
        array={data.map((link) =>
          <Collapse
            title={
              <Heading title={link.title} />
            }
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

export default Tools
