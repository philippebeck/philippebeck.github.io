import { blog } from '../../../assets/data.json'

import Card from '../../atoms/card/card'
import Icon from '../../atoms/icon/icon'
import Image from '../../atoms/image/image'
import Link from '../../atoms/link/link'
import List from '../../atoms/list/list'
import Title from '../../atoms/title/title'

import Collapse from '../../molecules/collapse/collapse'

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

      <Title
        heading={title.heading}
        subtitle={title.subtitle}
        prefix={

          <Icon
            name={title.icon.name}
            cat={title.icon.cat}
          />
        }
      />

      <List
        array={data.map((article) =>

          <Collapse
            title={article.title}
            content={

              <List
                array={article.gallery.map((item) =>

                  <Link
                    url={item.url}
                    label={item.detail}
                    content={

                      <Card
                        caption={item.caption}
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
