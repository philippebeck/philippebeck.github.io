import { content, portfolio } from '../../../assets/data.json'
import Gallery from '../../molecules/gallery/gallery'
import Title from '../../atoms/title/title'
import './portfolio.css'

const Portfolio = () => {

  return (
    <article id="portfolio">
      <Title title="Portfolio" subtitle={content.portfolio} />

      <Gallery name="Packages" gallery={portfolio.packages} />
      <Gallery name="Websites" gallery={portfolio.websites} />
    </article>
  )
}

export default Portfolio
