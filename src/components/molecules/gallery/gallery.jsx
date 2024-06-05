import Link from '../../atoms/link/link'
import Card from '../../molecules/card/card'
import Title from '../../molecules/title/title'

import './gallery.scss'

const Gallery = ({ name, gallery, cat="brands", icon="" }) => {
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
