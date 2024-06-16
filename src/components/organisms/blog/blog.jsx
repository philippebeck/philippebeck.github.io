import { blog } from '../../../assets/data.json'

import Collapse from '../../molecules/collapse/collapse'
import Gallery from '../../molecules/gallery/gallery'
import Title from '../../molecules/title/title'

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
        icon={blog.title.icon}
        subtitle={blog.title.subtitle}
      />

      { blog.data.map((article, index) =>
        <Collapse
          key={index}
          title={article.title}
          content={
            <Gallery
              gallery={article.gallery}
            />
          }
        />
      )}
    </article>
  )
}

export default Blog
