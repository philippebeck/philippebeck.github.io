import { blog } from '../../../assets/data.json'

import Card from '../../atoms/card/card'
import Collapse from '../../atoms/collapse/collapse'
import Heading from '../../molecules/heading/heading'
import Image from '../../atoms/image/image'
import Link from '../../atoms/link/link'
import List from '../../atoms/list/list'
import Title from '../../atoms/title/title'

import './blog.scss'

/**
 * ? BLOG ORGANISM
 * * Renders the Blog Organism
 * * that displays a list of articles
 *
 * @return {JSX.Element}
 *  The rendered Blog Organism.
 */
const Blog = () => {
  const { title, data } = blog;

  return (
    <article id="blog">
      <Heading title={title} />

      <List
        array={data.map((article) =>
          <Collapse
            title={
              <Heading title={article.title} />
            }
            content={
              <List
                array={article.gallery.map((item) =>
                  <Link
                    url={item.url}
                    title={item.detail}
                    content={
                      <Card
                        caption={
                          <Title heading={item.caption.title} />
                        }
                        content={
                          <Image
                            url={item.image.url}
                            alt={item.image.alt}
                          />
                        }
                      />
                    }
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

export default Blog
