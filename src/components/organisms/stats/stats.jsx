import { stats } from '../../../assets/data.json'
import Heading from '../../molecules/heading/heading'
import Image from '../../atoms/image/image'
import Slider from '../../molecules/slider/slider'
import './stats.scss'

/**
 * ? STATS ORGANISM
 * * Renders the Stats Organism that displays a list of stats
 *
 * @return {JSX.Element} - The rendered Stats Organism.
 */
const Stats = () => {
  const { title, data } = stats;

  return (
    <article id="stats">
      <Heading title={title} />

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
