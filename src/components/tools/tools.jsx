import { Collapse, Gallery, List, Title } from 'reactoms'
import { tools } from '../../assets/data.json'
import './tools.scss'

/**
 * ? TOOLS COMPONENT
 * * Renders the Tools Component that displays some nested lists of tools
 *
 * @return {JSX.Element} - The rendered Tools Component.
 */
const Tools = () => {
  const { title, data } = tools;

  return (
    <article id="tools">
      <Title
        txt={title.txt}
        lvl={title.lvl}
        sub={title.sub}
        ico={title.ico}
      />

      <List
        array={data.map((tool) =>
          <Collapse
            title={<Title
              txt={tool.title.txt}
              lvl={tool.title.lvl}
              ico={tool.title.ico}
            />}
            content={<Gallery array={tool.list} />}
          />
        )}
      />
    </article>
  )
}

export default Tools
