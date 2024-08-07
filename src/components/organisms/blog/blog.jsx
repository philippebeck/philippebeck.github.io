import { blog } from '../../../assets/data.json'
import Collapse from '../../atoms/collapse/collapse'
import Heading from '../../molecules/heading/heading'
import Links from '../../molecules/links/links'
import List from '../../atoms/list/list'
import './blog.scss'

/**
 * ? BLOG ORGANISM
 * * Renders the Blog Organism that displays a list of articles
 *
 * @return {JSX.Element} - The rendered Blog Organism.
 */
const Blog = () => {
  const { title, data } = blog;

  return (
    <article id="blog">
      <Heading title={title} />

      <List
        array={data.map((article) =>
          <Collapse
            title={<Heading title={article.title} />}
            content={<Links array={article.gallery} />}
          />
        )}
      />
    </article>
  )
}

export default Blog
