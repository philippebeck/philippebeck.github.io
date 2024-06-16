import Link from '../../atoms/link/link'
import Card from '../../molecules/card/card'

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
              image={item.image}
              caption={item.caption}
            />
          }
        />
      </li>
    )}
  </ul>
  )
}

export default Gallery
