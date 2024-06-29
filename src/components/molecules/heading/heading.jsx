import Icon from '../../atoms/icon/icon'
import Title from '../../atoms/title/title'

import './heading.scss'

/**
 * ? HEADING MOLECULE
 * * Renders the Heading Molecule
 * * with a title & an icon.
 *
 * @param {Object} props
 *  The properties for the heading component.
 *
 * @param {Object} props.title
 *  The title object.
 *
 * @param {string} props.title.heading
 *  The heading text.
 * @param {number} props.title.level
 *  The heading level.
 * @param {string} props.title.subtitle
 *  The subtitle text.
 * @param {Object} props.title.icon
 *  The icon object.
 *
 * @param {string} props.title.icon.name
 *  The name of the icon.
 * @param {string} props.title.icon.cat
 *  The category of the icon.
 * @param {string} props.title.icon.option
 *  The option of the icon.
 *
 * @return {JSX.Element}
 *  The rendered heading component.
 */
const Heading = ({ title }) => {
  const { heading, level, subtitle, icon } = title;
  const { name, cat, option } = icon;

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
