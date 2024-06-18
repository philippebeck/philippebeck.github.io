import Card from '../../atoms/card/card'
import Image from '../../atoms/image/image'
import Link from '../../atoms/link/link'

import './gallery.scss'

/**
 * ? GALLERY COMPONENT
 * * Renders a gallery component with the specified
 * * title object & array of gallery items.
 *
 * @param {Object} props
 *  The properties for the gallery.
 *
 * @param {Array} props.gallery
 *  The array of gallery items.
 *
 * @return {JSX.Element}
 *  The rendered gallery component.
 */
const Gallery = ({ gallery }) => {
  return (

  <ul className="gallery">
    { gallery.map((item, index) =>
      <li key={index}>

        <Link
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
      </li>
    )}
  </ul>
  )
}

export default Gallery
