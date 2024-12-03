import { Icon, List, Slider, Title } from 'reactoms'
import { skills } from '../../assets/data.json'
import './skills.scss'

/**
 * ? SKILLS COMPONENT
 * * Renders the Skills Component that displays a list of skills
 *
 * @return {JSX.Element} - The rendered Skills Component.
 */
const Skills = () => {
  const { title, data } = skills;

  return (
    <article id="skills">
      <Title
        txt={title.txt}
        lvl={title.lvl}
        sub={title.sub}
        ico={title.ico}
      />

      <Slider
        array={data.map((item, index) =>
          <List
            key={index}
            array={item.map((subitem) =>
              <Icon
                name={subitem.name}
                option={subitem.option}
              />
        )}
          />
        )}
      />
    </article>
  )
}

export default Skills
