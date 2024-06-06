import Link from '../../atoms/link/link'
import Card from '../../molecules/card/card'
import Title from '../../molecules/title/title'

import './gallery.scss'

/**
 * ? GALLERY COMPONENT
 * * Renders a gallery component with the specified
 * * name, array of gallery items, category & icon.
 *
 * @param {Object} props
 *  The properties for the gallery.
 *
 * @param {string} props.name
 *  The name of the gallery.
 *
 * @param {Array} props.gallery
 *  The array of gallery items.
 *
 * @param {string} props.cat
 *  The category of the gallery.
 *
 * @param {string} [props.icon=""]
 *  The icon for the gallery.
 * 
 * @return {JSX.Element}
 *  The rendered gallery component.
 */
const Gallery = ({ name, gallery, cat, icon="" }) => {
  return (

    <section className="gallery">
      <Title title={name} lvl="3" icon={icon} cat={cat} />

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
