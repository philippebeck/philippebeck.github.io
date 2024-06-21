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
 * ? BLOG COMPONENT
 * * Renders the Blog component.
 *
 * @return {JSX.Element}
 *  The rendered Blog component.
 */
const Blog = () => {
  return (

    <article id="blog">
      <Title
        heading={blog.title.heading}
        subtitle={blog.title.subtitle}
        prefix={

          <Icon
            name={blog.title.icon.name}
            cat={blog.title.icon.cat}
          />
        }
      />

      <ul>
        {blog.data.map((article, index) =>
          <li key={index}>

            <Collapse
              key={index}
              title={article.title}
              content={

                <List
                  list={article.gallery.map((item, i) =>

                    <Link
                      key={i}
                      url={item.url}
                      title={item.detail}
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
          </li>
        )}
      </ul>

    </article>
  )
}

export default Blog
