import { about } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Title from '../../atoms/title/title'

import './about.scss'

const About = () => {
  return (
    <article id="about">
      <Title 
        heading={about.title.heading}
        subtitle={about.title.subtitle}
        prefix={

          <Icon
            name={about.title.icon.name}
            cat={about.title.icon.cat}
          />
        }
      />

      { about.data.map((item, index) =>

      <section key={index}>
        <Title
          heading={item.title.heading}
          prefix={

            <Icon
              name={item.title.icon.name}
              cat={item.title.icon.cat}
            />
          }
        />

        <ul>
          { item.data.map((subitem, subindex) =>

            <li key={subindex}>{subitem}</li>
          )}
        </ul>
      </section>
      )}

    </article>
  )
}

export default About
