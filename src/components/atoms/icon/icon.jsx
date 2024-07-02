import './icon.scss'

/**
 * ? ICON ATOM
 * * Renders the Icon Atom with the specified Name,
 * * a Category, an Option, a Visibility & an Event.
 *
 * @param {Object} props - The Properties for the Icon Atom.
 * @param {string} props.name - The Name of the Icon.
 * @param {string} [props.cat="brands"] - The Category of the Icon
 * @param {string} [props.option="2x"] - The Option of the Icon
 * @param {boolean} [props.isHidden=true] - The visibility of the Icon
 * @param {string} [props.event=""] - The Event of the Icon
 *
 * @return {JSX.Element} - The rendered Icon Atom.
 */
const Icon = ({ name, cat = "brands", option = "2x", isHidden = true, event = ""}) => {

  return (
    <i
    {...(event
      ?
      { 'className': `fa-${cat} fa-${name} fa-${option}` }
      :
      { 'className': `fa-${cat} fa-${name} fa-${option} fa-fw` }
    )}
    aria-hidden={isHidden}
    {...(event ? { 'onClick': event } : {})}
    {...(event ? { 'onKeyDown': event } : {})}
    {...(event ? { 'tabIndex': 0 } : {})}
    ></i>
  )
}

export default Icon
