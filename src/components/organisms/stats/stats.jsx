import { stats } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Image from '../../atoms/image/image'
import Title from '../../atoms/title/title'
import Slider from '../../molecules/slider/slider'

import './stats.scss'

/**
 * ? STATS
 * * Renders statistics related to GitHub like 
 * * stats, streaks & most used languages.
 *
 * @return {JSX.Element}
 *  Rendered statistics component
 */
const Stats = () => {
  return (

    <article id="stats">
      <Title
        heading={stats.title.heading}
        subtitle={stats.title.subtitle}
        prefix={
          
          <Icon 
            name={stats.title.icon.name}
            cat={stats.title.icon.cat}
          />
        }
        />

      <Slider
        array={[
          <Image
            url="https://github-readme-stats.vercel.app/api?username=philippebeck&amp;theme=midnight-purple&amp;show_icons=true"
            alt="GitHub Stats" />
          ,
          <Image
            url="https://github-readme-streak-stats.herokuapp.com/?user=philippebeck&amp;theme=midnight-purple"
            alt="GitHub Streaks" />
          ,
          <Image
            url="https://github-readme-stats.vercel.app/api/top-langs/?username=philippebeck&amp;layout=compact&amp;theme=midnight-purple"
            alt="Most Used Languages" />
        ]}
        timer="5000"
      />
    </article>
  )
}

export default Stats
