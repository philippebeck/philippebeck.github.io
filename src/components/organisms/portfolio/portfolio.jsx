import { portfolio } from '../../../assets/data.json'
import Collapse from '../../atoms/collapse/collapse'
import Heading from '../../molecules/heading/heading'
import Links from '../../molecules/links/links'
import List from '../../atoms/list/list'
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
      <Heading title={title} />

      <List
        array={data.map((project) =>
          <Collapse
            title={<Heading title={project.title} />}
            content={<Links array={project.gallery} />}
          />
        )}
      />
    </article>
  )
}

export default Portfolio
