import { blog, content } from '../../../assets/data.json'

import Title from '../../molecules/title/title'
import Gallery from '../../molecules/gallery/gallery'

import './blog.scss'

const Blog = () => {
  return (

    <article id="blog">
      <Title
        title="Blog"
        cat="solid"
        icon="blog"
        subtitle={content.blog}
      />

      <Gallery
        name="HTML5"
        gallery={blog.html}
        icon="html5"
      />

      <Gallery 
        name="CSS3"
        gallery={blog.css}
        icon="css3"
      />

      <Gallery
        name="JavaScript"
        gallery={blog.js}
        icon="square-js"
      />

      <Gallery
        name="PHP"
        gallery={blog.php}
        icon="php"
      />

      <Gallery
        name="Sass"
        gallery={blog.sass}
        icon="sass"
      />
    </article>
  )
}

export default Blog
