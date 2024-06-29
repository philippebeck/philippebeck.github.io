import { about } from '../../../assets/data.json'

import Heading from '../../molecules/heading/heading'
import List from '../../atoms/list/list'
import Slider from '../../atoms/slider/slider'

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
      <Heading title={title} />

      <Slider
        array={data.map((item) =>

          <section>
            <Heading title={item.title} />

            <List
              array={item.data.map((subitem) =>
                <>{subitem}</>
              )}
            />
          </section>
        )}
      />
    </article>
  )
}

export default About
