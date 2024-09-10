import { Icon, Title } from 'reactoms'
import './heading.scss'

/**
 * ? HEADING MOLECULE
 * * Renders the Heading Molecule with a Title & an Icon.
 *
 * @param {Object} props - The Properties for the Heading Molecule.
 * @param {Object} props.title - The Title of the Heading.
 * @param {string} props.title.heading - The Text of the Heading.
 * @param {number} props.title.level - The Level of the Heading.
 * @param {string} props.title.subtitle - The Subtitle of the Heading.
 * @param {Object} props.title.icon - The Icon of the Heading.
 * @param {string} props.title.icon.cat - The Icon Category of the Heading.
 * @param {string} props.title.icon.name - The Icon Name of the Heading.
 * @param {string} props.title.icon.option - The Icon Option of the Heading.
 *
 * @return {JSX.Element} - The rendered Heading Molecule.
 */
const Heading = ({ title }) => {
  const { heading, level, subtitle, icon } = title;
  const { cat, name, option } = icon;

  return (
    <Title
      heading={heading}
      level={level}
      subtitle={subtitle}
      prefix={

        <Icon
          name={name}
          cat={cat}
          option={option}
        />
      }
    />
  )
}

export default Heading
