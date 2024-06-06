import './icon.scss'

/**
 * ? ICON COMPONENT
 * * Renders an icon component with the specified
 * * name, category, visibility & option.
 *
 * @param {Object} props
 *  The properties for the Icon component.
 *
 * @param {string} props.name
 *  The name of the icon.
 *
 * @param {string} [props.cat="brands"]
 *  The category of the icon.
 *  Defaults to "brands".
 *
 * @param {string} [props.isHidden="true"]
 *  Whether the icon is aria-hidden or not.
 *  Defaults to "true".
 *
 * @param {string} [props.option="1x"]
 *  The option of the icon.
 *  Defaults to size "1x".
 *
 * @return {JSX.Element}
 *  The rendered icon component.
 */
const Icon = ({name, cat="brands", isHidden="true", option="1x"}) => {

  return (
    <i
      className={`fa-${cat} fa-${name} fa-${option} fa-fw`}
      aria-hidden={isHidden}
    ></i>
  )
}

export default Icon
