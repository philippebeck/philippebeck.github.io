import { stats } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Image from '../../atoms/image/image'
import Title from '../../atoms/title/title'

import Slider from '../../molecules/slider/slider'

import './stats.scss'

/**
 * ? STATS ORGANISM
 * * Renders the Stats Organism
 * * that displays a list of stats
 *
 * @return {JSX.Element}
 *  The rendered Stats Organism.
 */
const Stats = () => {
  const { title, data } = stats;

  return (
    <article id="stats">

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

          <Image
            key={index}
            url={item.url}
            alt={item.alt}
          />
        )}
      />
    </article>
  )
}

export default Stats
