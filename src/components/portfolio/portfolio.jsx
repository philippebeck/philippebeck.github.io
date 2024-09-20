import { Collapse, Gallery, List, Title } from 'reactoms'
import { portfolio } from '../../assets/data.json'
import './portfolio.scss'

/**
 * ? PORTFOLIO ORGANISM
 * * Renders the Portfolio Organism that displays a list of projects
 *
 * @return {JSX.Element} - The rendered Portfolio Organism.
 */
const Portfolio = () => {
  const { title, data } = portfolio;

  return (
    <article id="portfolio">
      <Title
        txt={title.txt}
        lvl={title.lvl}
        sub={title.sub}
        ico={title.ico}
      />

      <List
        array={data.map((project) =>
          <Collapse
            title={<Title 
              txt={project.title.txt}
              lvl={project.title.lvl}
              ico={project.title.ico}
            />}
            content={<Gallery array={project.gallery} />}
          />
        )}
      />
    </article>
  )
}

export default Portfolio
