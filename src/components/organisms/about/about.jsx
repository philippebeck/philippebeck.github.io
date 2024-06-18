import { about } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Title from '../../atoms/title/title'

import './about.scss'

const About = () => {
  return (
    <section id="about">
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

      <ul>
        { about.data.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </section>
  )
}

export default About
