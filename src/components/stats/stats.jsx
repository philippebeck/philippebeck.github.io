import { Image, Slider, Title } from 'reactoms'
import { stats } from '../../assets/data.json'
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
      <Title
        txt={title.txt}
        lvl={title.lvl}
        sub={title.sub}
        ico={title.ico}
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
