import Icon from '../../atoms/icon/icon'

import "./title.scss"

/**
 * ? TITLE COMPONENT
 * * Renders a title component with the specified
 * * title, level, category, icon & subtitle.
 *
 * @param {Object} props
 *  The properties for the Title component.
 *
 * @param {string} props.title
 *  The title of the component.
 *
 * @param {string} [props.lvl="2"]
 *  The level of the title (1, 2, 3, or 4).
 *  Defaults to 2.
 *
 * @param {string} props.cat
 *  The category of the title.
 *
 * @param {string} [props.icon=""]
 *  The icon for the title.
 *
 * @param {string} [props.subtitle=""]
 *  The subtitle for the title.
 *
 * @return {JSX.Element}
 *  The rendered title component.
 */
const Title = ({ title, lvl="2", cat, icon="", subtitle="" }) => {
  return (

    <hgroup>
      {
        lvl === "1" ? <h1>{title}</h1> :

        lvl === "2" ? <h2>
          <Icon name={icon} cat={cat} size="1" />
          {title}
        </h2> :

        lvl === "3" ? <h3>
          <Icon name={icon} cat={cat} size="1" />
          {title}
        </h3> :

        <h4>{title}</h4>
      }
      {
        subtitle && <p>{subtitle}</p>
      }
    </hgroup>
  )
}

export default Title
