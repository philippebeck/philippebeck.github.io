import { List, Slider, Title } from 'reactoms'
import { about } from '../../assets/data.json'
import './about.scss'

/**
 * ? ABOUT COMPONENT
 * * Renders the About Component that displays a list of information
 *
 * @return {JSX.Element} - The rendered About Component.
 */
const About = () => {
  const { title, data } = about;

  return (
    <article id="about">
      <Title
        txt={title.txt}
        lvl={title.lvl}
        sub={title.sub}
        ico={title.ico}
      />

      <Slider
        array={data.map((item) =>
          <section>
            <Title
              txt={item.title.txt}
              lvl={item.title.lvl}
              ico={item.title.ico}
            />

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
