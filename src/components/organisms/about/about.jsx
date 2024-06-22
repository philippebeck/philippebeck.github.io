import { about } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Title from '../../atoms/title/title'

import Slider from '../../molecules/slider/slider'

import './about.scss'

const About = () => {
  const { title, data } = about;

  return (
    <article id="about">

      <Title
        heading={title.heading}
        subtitle={title.subtitle}
        prefix={

          <Icon
            name={title.icon.name}
            cat={title.icon.cat}
          />
        }
      />

      <Slider
        array={data.map((item, index) =>
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
              {item.data.map((subitem, subindex) =>
                <li key={subindex}>{subitem}</li>
              )}
            </ul>
          </section>
        )}
      />
    </article>
  )
}

export default About
