import { blog } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Title from '../../atoms/title/title'

import Collapse from '../../molecules/collapse/collapse'
import Gallery from '../../molecules/gallery/gallery'

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

      { blog.data.map((article, index) =>
        <Collapse
          key={index}
          title={article.title}
          content={
            <Gallery
              array={article.gallery}
            />
          }
        />
      )}
    </article>
  )
}

export default Blog
