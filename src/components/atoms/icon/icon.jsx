import './icon.scss'

/**
 * ? ICON COMPONENT
 * * Renders an icon component with the specified
 * * name, category, option, visibility & event.
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
 * @param {string} [props.option="2x"]
 *  The option of the icon.
 *  Defaults to size "2x".
 *
 * @param {string} [props.isHidden=true]
 *  Whether the icon is aria-hidden or not.
 *  Defaults to true.
 *
 * @param {string} [props.event=""]
 *  The event to be triggered when the icon is clicked.
 *  Defaults to an empty string.
 *
 * @return {JSX.Element}
 *  The rendered icon component.
 */
const Icon = ({name, cat="brands", option="2x", isHidden=true, event=""}) => {
  const hasEvent = event !== "";

  return (
    hasEvent
    ?
    <i
      className={`fa-${cat} fa-${name} fa-${option}`}
      aria-hidden={isHidden}
      onClick={event}
    ></i>
    :
    <i
      className={`fa-${cat} fa-${name} fa-${option} fa-fw`}
      aria-hidden={isHidden}
    ></i>
  )
}

export default Icon
