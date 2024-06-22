import { about } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import List from '../../atoms/list/list'
import Title from '../../atoms/title/title'

import Slider from '../../molecules/slider/slider'

import './about.scss'

/**
 * ? ABOUT ORGANISM
 * * Renders the About Organism
 * * that displays a list of information
 *
 * @return {JSX.Element}
 *  The rendered About Organism.
 */
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
        array={data.map((item) =>
          <section>

            <Title
              heading={item.title.heading}
              prefix={

                <Icon
                  name={item.title.icon.name}
                  cat={item.title.icon.cat}
                />
              }
            />

            <List
              array={item.data.map((subitem) => 
                <>{ subitem }</>
              )}
            />
          </section>
        )}
      />
    </article>
  )
}

export default About
