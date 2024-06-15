import Icon from '../../atoms/icon/icon'

import "./title.scss"

/**
 * ? TITLE COMPONENT
 * * Renders a title component with the specified
 * * heading, icon & subtitle.
 *
 * @param {Object} props
 *  The properties for the Title component.
 *
 * @param {Object} props.heading
 *  The heading object of the title.
 * @param {string} props.heading.level
 *  The level of the heading.
 * @param {string} props.heading.text
 *  The text of the heading.
 *
 * @param {Object} props.icon
 *  The icon object for the title.
 * @param {string} props.icon.name
 *  The name of the icon.
 * @param {string} props.icon.cat
 *  The category of the icon.
 *
 * @param {string} [props.subtitle=""]
 *  The subtitle for the title.
 *
 * @return {JSX.Element}
 *  The rendered title component.
 */
const Title = ({ heading, icon, subtitle="" }) => {
  return (

    <hgroup>
      <p>
        <Icon name={icon.name} cat={icon.cat} />
      </p>
      {
        heading.level === "1" ? <h1>{heading.text}</h1> :
        heading.level === "2" ? <h2>{heading.text}</h2> :

        <h3>{heading.text}</h3>
      }
      {
        subtitle && <p>{subtitle}</p>
      }
    </hgroup>
  )
}

export default Title
