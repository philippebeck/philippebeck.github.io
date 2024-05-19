import Card from '../../molecules/card/card'
import Link from '../../atoms/link/link'
import Title from '../../atoms/title/title'
import './gallery.css'

const Gallery = ({ name, gallery }) => {

  return (
    <section className="gallery">
      <Title title={name} lvl="3" />

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
                  content={<h4>{item.title}</h4>}
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