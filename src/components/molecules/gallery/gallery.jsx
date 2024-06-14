import Link from '../../atoms/link/link'
import Card from '../../molecules/card/card'
import Title from '../../molecules/title/title'

import './gallery.scss'

/**
 * ? GALLERY COMPONENT
 * * Renders a gallery component with the specified
 * * title object & array of gallery items.
 *
 * @param {Object} props
 *  The properties for the gallery.
 *
 * @param {Object} props.title
 *  The title object of the gallery.
 *
 * @param {Array} props.gallery
 *  The array of gallery items.
 *
 * @return {JSX.Element}
 *  The rendered gallery component.
 */
const Gallery = ({ title, gallery }) => {
  return (

    <section className="gallery">
      <Title title={title.name} lvl="3" icon={title.icon} cat={title.cat} />

      <ul>
        { gallery.map((item, index) =>
          <li key={index}>

            <Link
              url={item.url}
              title={item.detail}
              content={

                <Card
                  url={item.image}
                  alt={item.alt}
                  content={item.title}
                />
              }
            />
          </li>
        )}
      </ul>
    </section>
  )
}

export default Gallery
