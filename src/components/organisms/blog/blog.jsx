import { blog, content } from '../../../assets/data.json'

import Title from '../../molecules/title/title'
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
        heading={content.blog.heading}
        icon={content.blog.icon}
        subtitle={content.blog.subtitle}
      />

      { blog.map((article, index) =>
        <Gallery
          key={index}
          title={article.title}
          gallery={article.gallery}
        />
      )}
    </article>
  )
}

export default Blog
