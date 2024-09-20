import { Collapse, Gallery, List, Title } from 'reactoms'
import { blog } from '../../assets/data.json'
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
      <Title
        txt={title.txt}
        lvl={title.lvl}
        sub={title.sub}
        ico={title.ico}
      />

      <List
        array={data.map((article) =>
          <Collapse
            title={<Title
              txt={article.title.txt}
              lvl={article.title.lvl}
              ico={article.title.ico}
            />}
            content={<Gallery array={article.gallery} />}
          />
        )}
      />
    </article>
  )
}

export default Blog
